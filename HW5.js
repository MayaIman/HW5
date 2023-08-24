class Stack {
  constructor(maxSize = 10) {
    if (!Number.isInteger(maxSize) && isFinite(maxSize) && !isNaN(maxSize))
    throw new Error('Параметр должен быть валидным числом.')
    }

    this.top = null;
    this.size = 0;
    this.maxSize = maxSize; 
  }

  push(item) {
    if (this.size >= maxSize){
        throw new Error('Стек переполнен.');
    } else {
    const newNode = { value: item, next: this.top };
    this.top = newNode;
    this.size++;
  }
}

  pop() {
    if (this.size === 0) {
      throw new Error('Стек пуст.')
    }

    const value = this.top.value;
    this.top = this.top.next;
    this.size--;
    return value;
  }

  isEmpty() {
    return this.size === 0;
  }

  toArray() {
    const result = [];
    let current = this.top;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }

  static fromIterable(iterable) {
    if (!iterable || typeof iterable[Symbol.iterator] !== 'function') {
      throw new Error('Сущность не является итерируемой.');
    }

    const newStack = new Stack();
    for (const item of iterable) {
      newStack.push(item);
    }
    return newStack;
  }

  get peek() {
    if (this.size === 0){
        return null;
    } else {
    return this.top ? this.top.value : undefined;
  }
};

module.exports = { Stack };
