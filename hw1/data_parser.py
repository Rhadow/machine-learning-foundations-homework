import numpy as np


def parse_input(data_string):
    X = []
    Y = []
    inputs = data_string.split('\n')
    inputs.pop()

    for input_str in inputs:
        input_str = input_str.replace('\t', ' ')
        nums = input_str.split(' ')
        inputs = ['1'] + nums[0:4]
        output = nums[4]
        X.append(np.matrix(';'.join(inputs)))
        Y.append(int(output))

    return (X, Y)
