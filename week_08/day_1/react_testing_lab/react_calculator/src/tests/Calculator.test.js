import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should be able to add 1 and 4 with 5 as a result', () => {
    const button4 = container.getByTestId('number4');
    const button1 = container.getByTestId('number1');
    const buttonequals = container.getByTestId('operator-equals');
    const buttonadd = container.getByTestId('operator-add');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(buttonadd);
    fireEvent.click(button4);
    fireEvent.click(buttonequals);
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should be able to subtract 4 from 7 with 3 as a result', () => {
    const button4 = container.getByTestId('number4');
    const button7 = container.getByTestId('number7');
    const buttonequals = container.getByTestId('operator-equals');
    const buttonsubtract = container.getByTestId('operator-subtract');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(buttonsubtract);
    fireEvent.click(button4);
    fireEvent.click(buttonequals);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should be able to multiply 3 by 5 with 15 as a result', () => {
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const buttonequals = container.getByTestId('operator-equals');
    const buttonmultiply = container.getByTestId('operator-multiply');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(buttonmultiply);
    fireEvent.click(button5);
    fireEvent.click(buttonequals);
    expect(runningTotal.textContent).toEqual('15');
  })

  it('should be able to divide 21 by 7 with 3 as a result', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const buttonequals = container.getByTestId('operator-equals');
    const buttondivide = container.getByTestId('operator-divide');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(buttondivide);
    fireEvent.click(button7);
    fireEvent.click(buttonequals);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should be able to concatenate multiple number clicks', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const buttonequals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(button7);
    fireEvent.click(buttonequals);
    expect(runningTotal.textContent).toEqual('217');
  })

  it('should be able to subtract 4 from 7 then multiply by 3 with 9 as a result ', () => {
    const button3 = container.getByTestId('number3');
    const button4 = container.getByTestId('number4');
    const button7 = container.getByTestId('number7');
    const buttonequals = container.getByTestId('operator-equals');
    const buttonsubtract = container.getByTestId('operator-subtract');
    const buttonmultiply = container.getByTestId('operator-multiply');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(buttonsubtract);
    fireEvent.click(button4);
    fireEvent.click(buttonmultiply);
    fireEvent.click(button3);
    fireEvent.click(buttonequals);
    expect(runningTotal.textContent).toEqual('9');
  })

  it('should be able to multiply 3 by 5 with 15 as a result then after clearing still have be able to add 1 to get 16 as a result', () => {
    const button3 = container.getByTestId('number3');
    const button1 = container.getByTestId('number1');
    const button5 = container.getByTestId('number5');
    const buttonequals = container.getByTestId('operator-equals');
    const buttonadd = container.getByTestId('operator-add');
    const buttonclear = container.getByTestId('clear');
    const buttonmultiply = container.getByTestId('operator-multiply');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(buttonmultiply);
    fireEvent.click(button5);
    fireEvent.click(buttonequals);
    fireEvent.click(buttonclear);
    fireEvent.click(buttonadd);
    fireEvent.click(button1);
    fireEvent.click(buttonequals);
    expect(runningTotal.textContent).toEqual('16');
  })

})

