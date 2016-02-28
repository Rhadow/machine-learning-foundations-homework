from data_parser import parse_input
from pla import train
from pla import count_weight_error


if __name__ == '__main__':
    linear_training_data_str = ''
    non_linear_training_data_str = ''
    non_linear_validation_data_str = ''

    with open('linear_training_data.txt', 'r') as f:
        linear_training_data_str = f.read()

    with open('non_linear_training_data.txt', 'r') as f:
        non_linear_training_data_str = f.read()

    with open('non_linear_validation_data.txt', 'r') as f:
        non_linear_validation_data_str = f.read()

    X, Y = parse_input(linear_training_data_str)
    nl_X, nl_Y = parse_input(non_linear_training_data_str)
    test_X, test_Y = parse_input(non_linear_validation_data_str)

    # Q15
    W, update_count = train(X, Y, is_pocket=False)
    print(update_count)

    # Q16
    # total = 0
    # for i in range(2000):
    #     W, update_count = train(X, Y, True, is_pocket=False)
    #     print(i)
    #     total += update_count
    # print(total / 2000)

    # Q17
    # total = 0
    # for i in range(2000):
    #     W, update_count = \
    #         train(X, Y, is_random_seq=True, eta=0.5, is_pocket=False)
    #     print(i)
    #     total += update_count
    # print(total / 2000)

    # Q18
    # total = 0
    # for i in range(2000):
    #     print(i)
    #     W, count = train(nl_X, nl_Y, is_random_seq=True, learning_loop=50)
    #     err_rate = count_weight_error(W, test_X, test_Y) / len(test_Y)
    #     total += err_rate
    # print(total / 2000)

    # Q19
    # total = 0
    # for i in range(2000):
    #     print(i)
    #     W, count = train(
    #         nl_X,
    #         nl_Y,
    #         is_random_seq=True,
    #         is_pocket=False,
    #         learning_loop=50)
    #     err_rate = count_weight_error(W, test_X, test_Y) / len(test_Y)
    #     total += err_rate
    # print(total / 2000)

    # Q20
    # total = 0
    # for i in range(2000):
    #     print(i)
    #     W, count = train(nl_X, nl_Y, is_random_seq=True, learning_loop=100)
    #     err_rate = count_weight_error(W, test_X, test_Y) / len(test_Y)
    #     total += err_rate
    # print(total / 2000)
