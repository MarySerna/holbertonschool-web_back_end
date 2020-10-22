#!/usr/bin/env python3
"""
Async Generator
"""
import asyncio
import time


async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Execute async_comprehension four times in parallel using asyncio.gather
    measure the total runtime and return it.
    """
    tasks = []
    start_time = time.time()
    for _ in range(4):
        tasks.append(asyncio.create_task(async_comprehension()))
    await asyncio.gather(*tasks)
    return time.time() - start_time
