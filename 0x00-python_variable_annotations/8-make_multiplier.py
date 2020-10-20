#!/usr/bin/env python3
"""
Functions
"""
from typing import Callable, Iterator, Union, Optional, List, Tuple


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Takes a float multiplier as argument
    returns a function that multiplies a float by multiplier.
    """

    def fl(n: float) -> float:
        """
        Multiplies a float by multiplier
        """
        return float(n * multiplier)
    return fl
