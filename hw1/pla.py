import random
import numpy as np
from data_parser import parse_input


def sign(num):
    return 1 if num > 0 else -1


def validate(w, xn, yn):
    result = w.getT().dot(xn)[0][0]
    return sign(result) == yn


def count_weight_error(W, X, Y):
    err_count = 0
    for i in range(len(X)):
        xn = X[i]
        yn = Y[i]
        if not validate(W, xn, yn):
            err_count += 1
    return err_count


def train(X, Y, is_random_seq=False, eta=1, is_pocket=True, learning_loop=50):
    is_all_data_match = False
    update_count = 0
    loop_count = 0
    sequence = range(len(X))
    W = np.matrix(';'.join('0' * len(X[0])))
    best_W = W
    best_W_err_count = count_weight_error(best_W, X, Y)

    if is_random_seq:
        sequence = random.sample(range(len(X)), len(X))

    while not is_all_data_match and loop_count < learning_loop:
        err_count = 0
        for i in sequence:
            xn = X[i]
            yn = Y[i]
            if not validate(W, xn, yn):
                update_count += 1
                err_count += 1
                W = W + eta * yn * xn
        if err_count == 0:
            is_all_data_match = True
        if is_pocket:
            new_weight_error_count = count_weight_error(W, X, Y)
            if best_W_err_count > new_weight_error_count:
                best_W = W
                best_W_err_count = new_weight_error_count
        else:
            best_W = W
        loop_count += 1

    return (best_W, update_count)
