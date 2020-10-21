#!/usr/bin/env python3
"""
The basics of async
"""

import asyncio
import random
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Take the code from wait_n and alter it into a new function task_wait_n
    """
    queue, array = [], []

    for _ in range(n):
        queue.append(task_wait_random(max_delay))

    for q in asyncio.as_completed(queue):
        result = await q
        array.append(result)

    return array
