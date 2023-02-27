
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import React from "react";
import { afterEach, describe, expect, it } from 'vitest';
import Calculator, { equalSign, numbers, operations } from '../src/Calculator';

// https://testing-library.com/docs/react-testing-library/intro/
// https://mathjs.org/

describe('Calculator', (): void => {
  afterEach(cleanup);

  it('should render', (): void => {
    render(<Calculator />)
  })

  it('should render title correctly', (): void => {
    render(<Calculator />)
    screen.getByText('Calculator');
  })

  it('should render numbers', (): void => {
    render(<Calculator />)
    numbers.forEach(number => {
      screen.getByText(number);
    })
  })

  it('should render 4 rows', (): void => {
    render(<Calculator />)
    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(4);
  })

  it('should render operations', (): void => {
    render(<Calculator />)
    operations.forEach(operation => {
      screen.getByText(operation);
    })
  })

  it('should render equal sign', (): void => {
    render(<Calculator />)
    screen.getByText('=');
  })

  it('should render an input', (): void => {
    render(<Calculator />)
    screen.getByRole('textbox');
  })

  it('should user input after clicking a number', (): void => {
    render(<Calculator />)
    const one = screen.getByText('1');
    fireEvent.click(one);

    const input = screen.getByRole('textbox');
    expect(input.value).toBe('1');
  })

  it('should user input after clicking several numbers', (): void => {
    render(<Calculator />)

    const one = screen.getByText('1');
    fireEvent.click(one);

    const two = screen.getByText('2');
    fireEvent.click(two);

    const three = screen.getByText('3');
    fireEvent.click(three);

    const input = screen.getByRole('textbox');
    expect(input.value).toBe('123');
  })

  it('should show user input after clicking numbers and operations', (): void => {
    render(<Calculator />)

    const one = screen.getByText('1');
    fireEvent.click(one);

    const plus = screen.getByText('+');
    fireEvent.click(plus);
    fireEvent.click(one);

    const input = screen.getByRole('textbox');
    expect(input.value).toBe('1+1');
  })

  it('should calculate based on user input and show the calculation', (): void => {
    render(<Calculator />)

    const one = screen.getByText('1');
    fireEvent.click(one);

    const plus = screen.getByText('+');
    fireEvent.click(plus);
    fireEvent.click(one);

    const equal = screen.getByText(equalSign);
    fireEvent.click(equal);

    const input = screen.getByRole('textbox');
    expect(input.value).toBe('2');
  })

})