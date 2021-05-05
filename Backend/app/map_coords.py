import random

def get_coords():
    lat = 52.945 + (2*random.random() - 1)*0.01
    lng = 0.986 + (2*random.random() - 1)*0.01
    return [lat, lng]


