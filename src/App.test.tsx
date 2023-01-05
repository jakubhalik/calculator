import React, { useState } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Calculator from './App'

describe('Calculator Tests', () => {

  describe('Testing that there are buttons with numbers from 0-9, /,*,+,-,(,),. symbols, CE and DEL', () =>{
  test('Buttons exist', () => {
    render(<Calculator />);
    for (let i = 0; i <= 9; i++) {
      const digits = screen.getByText(new RegExp(i.toString(), 'i'));
      expect(digits).toBeInTheDocument();
  }
    const slash = screen.getByText('/');
    const times = screen.getByText('*');
    const plus = screen.getByText('+');
    const minus = screen.getByText('-');
    const decimalPoint = screen.getByText('.');
    const openingBracket = screen.getByText('(');
    const closingBracket = screen.getByText(')');
    const CE = screen.getByText('CE');
    const DEL = screen.getByText('DEL');
      expect(slash && times && plus && minus && decimalPoint && openingBracket && closingBracket && CE && DEL).toBeInTheDocument();
  })
  })

  describe('Testing that typing a number, /,*,+,- or . into the input it will go there', () => {
    test('(key)keyPress function handles input correctly', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');   
      fireEvent.keyDown(inputField, { target: { name: '0' } });
      expect(inputField.getAttribute('name')).toBe('0');
      fireEvent.keyDown(inputField, { target: { name: '1' } });
      expect(inputField.getAttribute('name')).toBe('1');
      fireEvent.keyDown(inputField, { target: { name: '2' } });
      expect(inputField.getAttribute('name')).toBe('2');
      fireEvent.keyDown(inputField, { target: { name: '3' } });
      expect(inputField.getAttribute('name')).toBe('3');
      fireEvent.keyDown(inputField, { target: { name: '4' } });
      expect(inputField.getAttribute('name')).toBe('4');
      fireEvent.keyDown(inputField, { target: { name: '5' } });
      expect(inputField.getAttribute('name')).toBe('5');
      fireEvent.keyDown(inputField, { target: { name: '6' } });
      expect(inputField.getAttribute('name')).toBe('6');
      fireEvent.keyDown(inputField, { target: { name: '7' } });
      expect(inputField.getAttribute('name')).toBe('7');
      fireEvent.keyDown(inputField, { target: { name: '8' } });
      expect(inputField.getAttribute('name')).toBe('8');
      fireEvent.keyDown(inputField, { target: { name: '9' } });
      expect(inputField.getAttribute('name')).toBe('9');
      fireEvent.keyDown(inputField, { target: { name: '(' } });
      expect(inputField.getAttribute('name')).toBe('(');
      fireEvent.keyDown(inputField, { target: { name: ')' } });
      expect(inputField.getAttribute('name')).toBe(')');
      fireEvent.keyDown(inputField, { target: { name: '.' } });
      expect(inputField.getAttribute('name')).toBe('.');
      fireEvent.keyDown(inputField, { target: { name: '/' } });
      expect(inputField.getAttribute('name')).toBe('/');
      fireEvent.keyDown(inputField, { target: { name: '*' } });
      expect(inputField.getAttribute('name')).toBe('*');
      fireEvent.keyDown(inputField, { target: { name: '+' } });
      expect(inputField.getAttribute('name')).toBe('+');
      fireEvent.keyDown(inputField, { target: { name: '-' } });
      expect(inputField.getAttribute('name')).toBe('-');
    })
  })

  describe('Test if when you press keys +,/,*,) and there is nothing in the input so far nothing will be added', () => {
    test('(key)Symbols !1st', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      fireEvent.keyDown(inputField, { key: '+' });
      fireEvent.keyDown(inputField, { key: '/' });
      fireEvent.keyDown(inputField, { key: '*' });
      fireEvent.keyDown(inputField, { key: ')' });
      expect(inputField.getAttribute('value')).toBe('');
    });
  });

  describe('Test if when you press key - and there is nothing in the input so far - will be added', () => {
    test('(key)- 1st', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      fireEvent.keyDown(inputField, { key: '-' });
      expect(inputField.getAttribute('value')).toBe('-');
    });
  });

  describe('Test that when you press different key then .,/,*,+,- and there is nothing in the input except 0 nothing will be added', () => {
    test('(key)Nothing except .,/,*,+,- after 0 in beginning', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      fireEvent.keyDown(inputField, { key: '0' });
      fireEvent.keyDown(inputField, { key: '0' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '2' });
      fireEvent.keyDown(inputField, { key: '3' });
      fireEvent.keyDown(inputField, { key: '4' });
      fireEvent.keyDown(inputField, { key: '5' });
      fireEvent.keyDown(inputField, { key: '6' });
      fireEvent.keyDown(inputField, { key: '7' });
      fireEvent.keyDown(inputField, { key: '8' });
      fireEvent.keyDown(inputField, { key: '9' });
      fireEvent.keyDown(inputField, { key: '(' });
      fireEvent.keyDown(inputField, { key: ')' });
      expect(inputField.getAttribute('value')).toBe('0');
    });
  });

  describe('Test that when you press key . and there is nothing in the input except 0 it will be added', () => {
    test('(key). after 0 in beginning', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      fireEvent.keyDown(inputField, { key: '0' });
      fireEvent.keyDown(inputField, { key: '.' });
      expect(inputField.getAttribute('value')).toBe('0.');
    });
  });
  
  describe('Test that when you press key + and there is nothing in the input except 0 it will be added', () => {
    test('(key)+ after 0 in beginning', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      fireEvent.keyDown(inputField, { key: '0' });
      fireEvent.keyDown(inputField, { key: '+' });
      expect(inputField.getAttribute('value')).toBe('0+');
    });
  });

  describe('Test that when you press key - and there is nothing in the input except 0 it will be added', () => {
    test('(key)- after 0 in beginning', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      fireEvent.keyDown(inputField, { key: '0' });
      fireEvent.keyDown(inputField, { key: '-' });
      expect(inputField.getAttribute('value')).toBe('0-');
    });
  });

  describe('Test that when you press key / and there is nothing in the input except 0 it will be added', () => {
    test('(key)/ after 0 in beginning', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      fireEvent.keyDown(inputField, { key: '0' });
      fireEvent.keyDown(inputField, { key: '/' });
      expect(inputField.getAttribute('value')).toBe('0/');
    });
  });

  describe('Test that when you press key * and there is nothing in the input except 0 it will be added', () => {
    test('(key)* after 0 in beginning', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      fireEvent.keyDown(inputField, { key: '0' });
      fireEvent.keyDown(inputField, { key: '*' });
      expect(inputField.getAttribute('value')).toBe('0*');
    });
  });

  describe('Test that if you press on the key . and there is a . directly before nothing displays', () => {
    test('(key)!multiple dots after each other', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '.' });
      expect(inputField.getAttribute('value')).toBe('.');
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '.' });
      expect(inputField.getAttribute('value')).toBe('.1');
    })
  })

  describe('Test that if you press on the key . and there is a . in the number nothing displays unless there is the same amount of operators in the input', () => {
    test('(key)!multiple dots in the same number', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '+' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '-' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '/' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '*' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '1' });
      expect(inputField.getAttribute('value')).toBe('.11+1.1-1.1/1.1*1.1');
    })
  })

  describe('Test that if you press on the key . and there is a . in the number nothing displays unless there is the same amount of operators in the input or unless there is - as the firstChar and more operators then decimal points', () => {
    test('(key)!multiple dots in the same number firstChar-', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      fireEvent.keyDown(inputField, { key: '-' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '+' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '-' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '/' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '*' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '1' });
      expect(inputField.getAttribute('value')).toBe('-1.11+1.1-1.1/1.1*1.1');
    })
  })

  describe('Test that u cannot type +,/,*,),. directly after ( and ( directly after )', () => {
    test('(key)+,/,*,),. !after ( && ( !after )', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      fireEvent.keyDown(inputField, { key: '(' });
      fireEvent.keyDown(inputField, { key: '+' });
      fireEvent.keyDown(inputField, { key: '/' });
      fireEvent.keyDown(inputField, { key: '*' });
      fireEvent.keyDown(inputField, { key: ')' });
      fireEvent.keyDown(inputField, { key: '.' });
      expect(inputField.getAttribute('value')).toBe('(');
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: ')' });
      fireEvent.keyDown(inputField, { key: '(' });
      expect(inputField.getAttribute('value')).toBe('(1)');
    })
  })

  describe('Test that u cannot type ) directly after +', () => {
    test('(key)+ !before )', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      fireEvent.keyDown(inputField, { key: '(' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '+' });
      fireEvent.keyDown(inputField, { key: ')' });
      expect(inputField.getAttribute('value')).toBe('(1+');
    })
  })

  describe('Test that u cannot type ) directly after -', () => {
    test('(key)- !before )', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      fireEvent.keyDown(inputField, { key: '(' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '-' });
      fireEvent.keyDown(inputField, { key: ')' });
      expect(inputField.getAttribute('value')).toBe('(1-');
    })
  })

  describe('Test that u cannot type ) directly after /', () => {
    test('(key)/ !before )', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      fireEvent.keyDown(inputField, { key: '(' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '/' });
      fireEvent.keyDown(inputField, { key: ')' });
      expect(inputField.getAttribute('value')).toBe('(1/');
    })
  })

  describe('Test that u cannot type ) directly after *', () => {
    test('(key)* !before )', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      fireEvent.keyDown(inputField, { key: '(' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '*' });
      fireEvent.keyDown(inputField, { key: ')' });
      expect(inputField.getAttribute('value')).toBe('(1*');
    })
  })

  describe('Test that u cannot type . directly after (,),.,+,-,/,*', () => {
    test('(key). !after symbols', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      fireEvent.keyDown(inputField, { key: '(' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: ')' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '+' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '-' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '/' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '*' });
      fireEvent.keyDown(inputField, { key: '.' });
      expect(inputField.getAttribute('value')).toBe('(1)+1-1/1*');
    })
  })

  describe('Test that u cannot type + directly after (,.,+,-,/,*', () => {
    test('(key)+ !after symbols', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      fireEvent.keyDown(inputField, { key: '(' });
      fireEvent.keyDown(inputField, { key: '+' });
      fireEvent.keyDown(inputField, { key: '+' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: ')' });
      fireEvent.keyDown(inputField, { key: '+' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '+' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '-' });
      fireEvent.keyDown(inputField, { key: '+' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '/' });
      fireEvent.keyDown(inputField, { key: '+' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '*' });
      fireEvent.keyDown(inputField, { key: '+' });
      expect(inputField.getAttribute('value')).toBe('(1)+1.1-1/1*');
    })
  })

  describe('Test that u cannot type - directly after .,-,-,/', () => {
    test('(key)- !after symbols', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      fireEvent.keyDown(inputField, { key: '(' });
      fireEvent.keyDown(inputField, { key: '-' });
      fireEvent.keyDown(inputField, { key: '-' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: ')' });
      fireEvent.keyDown(inputField, { key: '+' });
      fireEvent.keyDown(inputField, { key: '-' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '-' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '-' });
      fireEvent.keyDown(inputField, { key: '-' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '/' });
      fireEvent.keyDown(inputField, { key: '-' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '*' });
      fireEvent.keyDown(inputField, { key: '-' });
      expect(inputField.getAttribute('value')).toBe('(-1)+1.1-1/1*-');
    })
  })

  describe('Test that u cannot type / directly after (,.,+,-,/,*', () => {
    test('(key)/ !after symbols', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      fireEvent.keyDown(inputField, { key: '(' });
      fireEvent.keyDown(inputField, { key: '/' });
      fireEvent.keyDown(inputField, { key: '/' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: ')' });
      fireEvent.keyDown(inputField, { key: '+' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '+' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '-' });
      fireEvent.keyDown(inputField, { key: '+' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '/' });
      fireEvent.keyDown(inputField, { key: '+' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '*' });
      fireEvent.keyDown(inputField, { key: '+' });
      expect(inputField.getAttribute('value')).toBe('(1)+1.1-1/1*');
    })
  })

  describe('Test that u cannot type * directly after (,.,+,-,/,*', () => {
    test('(key)* !after symbols', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      fireEvent.keyDown(inputField, { key: '(' });
      fireEvent.keyDown(inputField, { key: '*' });
      fireEvent.keyDown(inputField, { key: '*' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: ')' });
      fireEvent.keyDown(inputField, { key: '*' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '.' });
      fireEvent.keyDown(inputField, { key: '*' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '-' });
      fireEvent.keyDown(inputField, { key: '*' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '/' });
      fireEvent.keyDown(inputField, { key: '*' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '+' });
      fireEvent.keyDown(inputField, { key: '*' });
      expect(inputField.getAttribute('value')).toBe('(1)*1.1-1/1+');
    })
  })

  describe('Test that when u click on Backspace on ur keyboard the last entry will be removed', () => {
    test('(key) Backspace clears entry', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: 'Backspace' });
      expect(inputField.getAttribute('value')).toBe('1');
    })
  })

  describe('Test that when u click on Enter on ur keyboard it will do the calculation', () => {
    test('(key) Enter calculates', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: '+' });
      fireEvent.keyDown(inputField, { key: '1' });
      fireEvent.keyDown(inputField, { key: 'Enter' });
      expect(inputField.getAttribute('value')).toBe('2');
    })
  })

  describe('Test if when you click on button +,/,*,) and there is nothing in the input so far nothing will be added', () => {
    test('(button)Symbols !1st', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      const slash = screen.getByText('/');
      const times = screen.getByText('*');
      const plus = screen.getByText('+');
      const closingBracket = screen.getByText(')');
      fireEvent.click(plus);
      fireEvent.click(slash);
      fireEvent.click(times);
      fireEvent.click(closingBracket);
      expect(inputField.getAttribute('value')).toBe('');
    });
  });

  describe('Test if when you click on a button - and there is nothing in the input so far - will be added', () => {
    test('(button)- 1st', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      const minus = screen.getByText('-');
      fireEvent.click(minus);
      expect(inputField.getAttribute('value')).toBe('-');
    });
  });

  describe('Test that when you click different button then .,/,*,+,- and there is nothing in the input except 0 nothing will be added', () => {
    test('(button)Nothing except .,/,*,+,- after 0 in beginning', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      const openingBracket = screen.getByText('(');
      const closingBracket = screen.getByText(')');
      const zero = screen.getByText('0');
      const one = screen.getByText('1');
      const two = screen.getByText('2');
      const three = screen.getByText('3');
      const four = screen.getByText('4');
      const five = screen.getByText('5');
      const six = screen.getByText('6');
      const seven = screen.getByText('7');
      const eight = screen.getByText('8');
      const nine = screen.getByText('9');
      fireEvent.click(zero);
      fireEvent.click(one);
      fireEvent.click(two);
      fireEvent.click(three);
      fireEvent.click(four);
      fireEvent.click(five);
      fireEvent.click(six);
      fireEvent.click(seven);
      fireEvent.click(eight);
      fireEvent.click(nine);
      fireEvent.click(openingBracket);
      fireEvent.click(closingBracket);
      expect(inputField.getAttribute('value')).toBe('0');
    });
  });

  describe('Test that when you click button . and there is nothing in the input except 0 it will be added', () => {
    test('(button). after 0 in beginning', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      const decimalPoint = screen.getByText('.');
      const zero = screen.getByText('0');
      fireEvent.click(zero);
      fireEvent.click(decimalPoint);
      expect(inputField.getAttribute('value')).toBe('0.');
    });
  });
  
  describe('Test that when you click button + and there is nothing in the input except 0 it will be added', () => {
    test('(button)+ after 0 in beginning', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      const plus = screen.getByText('+');
      const zero = screen.getByText('0');
      fireEvent.click(zero);
      fireEvent.click(plus);
      expect(inputField.getAttribute('value')).toBe('0+');
    });
  });

  describe('Test that when you click a button - and there is nothing in the input except 0 it will be added', () => {
    test('(button)- after 0 in beginning', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      const minus = screen.getByText('-');
      const zero = screen.getByText('0');
      fireEvent.click(zero);
      fireEvent.click(minus);
      expect(inputField.getAttribute('value')).toBe('0-');
    });
  });

  describe('Test that when you click a button / and there is nothing in the input except 0 it will be added', () => {
    test('(button)/ after 0 in beginning', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      const slash = screen.getByText('/');
      const zero = screen.getByText('0');
      fireEvent.click(zero);
      fireEvent.click(slash);
      expect(inputField.getAttribute('value')).toBe('0/');
    });
  });

  describe('Test that when you click a button * and there is nothing in the input except 0 it will be added', () => {
    test('(button)* after 0 in beginning', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      const times = screen.getByText('*');
      const zero = screen.getByText('0');
      fireEvent.click(zero);
      fireEvent.click(times);
      expect(inputField.getAttribute('value')).toBe('0*');
    });
  });

  describe('Test that if you click on a button . and there is a . directly before nothing displays', () => {
    test('(button)!multiple dots after each other', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      const decimalPoint = screen.getByText('.');
      const one = screen.getByText('1');
      fireEvent.click(decimalPoint);
      fireEvent.click(decimalPoint);
      expect(inputField.getAttribute('value')).toBe('.');
      fireEvent.click(one);
      fireEvent.click(decimalPoint);
      expect(inputField.getAttribute('value')).toBe('.1');
    })
  })

  describe('Test that if you click on a button . and there is a . in the number nothing displays unless there is the same amount of operators in the input', () => {
    test('(button)!multiple dots in the same number', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      const slash = screen.getByText('/');
      const times = screen.getByText('*');
      const plus = screen.getByText('+');
      const minus = screen.getByText('-');
      const decimalPoint = screen.getByText('.');
      const one = screen.getByText('1');
      fireEvent.click(decimalPoint);
      fireEvent.click(decimalPoint);
      fireEvent.click(one);
      fireEvent.click(decimalPoint);
      fireEvent.click(one);
      fireEvent.click(decimalPoint);
      fireEvent.click(plus);
      fireEvent.click(decimalPoint);
      fireEvent.click(one);
      fireEvent.click(decimalPoint);
      fireEvent.click(decimalPoint);
      fireEvent.click(one);
      fireEvent.click(decimalPoint);
      fireEvent.click(minus);
      fireEvent.click(decimalPoint);
      fireEvent.click(one);
      fireEvent.click(decimalPoint);
      fireEvent.click(decimalPoint);
      fireEvent.click(one);
      fireEvent.click(decimalPoint);
      fireEvent.click(slash);
      fireEvent.click(decimalPoint);
      fireEvent.click(one);
      fireEvent.click(decimalPoint);
      fireEvent.click(decimalPoint);
      fireEvent.click(one);
      fireEvent.click(decimalPoint);
      fireEvent.click(times);
      fireEvent.click(decimalPoint);
      fireEvent.click(one);
      fireEvent.click(decimalPoint);
      fireEvent.click(decimalPoint);
      fireEvent.click(one);
      expect(inputField.getAttribute('value')).toBe('.11+1.1-1.1/1.1*1.1');
    })
  })

  describe('Test that if you click on a button . and there is a . in the number nothing displays unless there is the same amount of operators in the input or unless there is - as the firstChar and more operators then decimal points', () => {
    test('(button)!multiple dots in the same number firstChar-', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      const slash = screen.getByText('/');
      const times = screen.getByText('*');
      const plus = screen.getByText('+');
      const minus = screen.getByText('-');
      const decimalPoint = screen.getByText('.');
      const one = screen.getByText('1');
      fireEvent.click(minus);
      fireEvent.click(one);
      fireEvent.click(decimalPoint);
      fireEvent.click(decimalPoint);
      fireEvent.click(one);
      fireEvent.click(decimalPoint);
      fireEvent.click(one);
      fireEvent.click(decimalPoint);
      fireEvent.click(plus);
      fireEvent.click(decimalPoint);
      fireEvent.click(one);
      fireEvent.click(decimalPoint);
      fireEvent.click(decimalPoint);
      fireEvent.click(one);
      fireEvent.click(decimalPoint);
      fireEvent.click(minus);
      fireEvent.click(decimalPoint);
      fireEvent.click(one);
      fireEvent.click(decimalPoint);
      fireEvent.click(decimalPoint);
      fireEvent.click(one);
      fireEvent.click(decimalPoint);
      fireEvent.click(slash);
      fireEvent.click(decimalPoint);
      fireEvent.click(one);
      fireEvent.click(decimalPoint);
      fireEvent.click(decimalPoint);
      fireEvent.click(one);
      fireEvent.click(decimalPoint);
      fireEvent.click(times);
      fireEvent.click(decimalPoint);
      fireEvent.click(one);
      fireEvent.click(decimalPoint);
      fireEvent.click(decimalPoint);
      fireEvent.click(one);
      expect(inputField.getAttribute('value')).toBe('-1.11+1.1-1.1/1.1*1.1');
    })
  })

  describe('Test that u cannot click on a button +,/,*,),. directly after ( and ( directly after )', () => {
    test('(button)+,/,*,),. !after ( && ( !after )', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      const slash = screen.getByText('/');
      const times = screen.getByText('*');
      const plus = screen.getByText('+');
      const decimalPoint = screen.getByText('.');
      const openingBracket = screen.getByText('(');
      const closingBracket = screen.getByText(')');
      const one = screen.getByText('1');
      fireEvent.click(openingBracket);
      fireEvent.click(plus);
      fireEvent.click(slash);
      fireEvent.click(times);
      fireEvent.click(closingBracket);
      fireEvent.click(decimalPoint);
      expect(inputField.getAttribute('value')).toBe('(');
      fireEvent.click(one);
      fireEvent.click(closingBracket);
      fireEvent.click(openingBracket);
      expect(inputField.getAttribute('value')).toBe('(1)');
    })
  })

  describe('Test that u cannot click on a button ) directly after +', () => {
    test('(button)+ !before )', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      const plus = screen.getByText('+');
      const openingBracket = screen.getByText('(');
      const closingBracket = screen.getByText(')');
      const one = screen.getByText('1');
      fireEvent.click(openingBracket);
      fireEvent.click(one);
      fireEvent.click(plus);
      fireEvent.click(closingBracket);
      expect(inputField.getAttribute('value')).toBe('(1+');
    })
  })

  describe('Test that u cannot click on a button ) directly after -', () => {
    test('(button)- !before )', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      const minus = screen.getByText('-');
      const openingBracket = screen.getByText('(');
      const closingBracket = screen.getByText(')');
      const one = screen.getByText('1');
      fireEvent.click(openingBracket);
      fireEvent.click(one);
      fireEvent.click(minus);
      fireEvent.click(closingBracket);
      expect(inputField.getAttribute('value')).toBe('(1-');
    })
  })

  describe('Test that u cannot click on a button ) directly after /', () => {
    test('(button)/ !before )', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      const slash = screen.getByText('/');
      const openingBracket = screen.getByText('(');
      const closingBracket = screen.getByText(')');
      const one = screen.getByText('1');
      fireEvent.click(openingBracket);
      fireEvent.click(one);
      fireEvent.click(slash);
      fireEvent.click(closingBracket);
      expect(inputField.getAttribute('value')).toBe('(1/');
    })
  })

  describe('Test that u cannot click on a button ) directly after *', () => {
    test('(button)* !before )', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      const times = screen.getByText('*');
      const openingBracket = screen.getByText('(');
      const closingBracket = screen.getByText(')');
      const one = screen.getByText('1');
      fireEvent.click(openingBracket);
      fireEvent.click(one);
      fireEvent.click(times);
      fireEvent.click(closingBracket);
      expect(inputField.getAttribute('value')).toBe('(1*');
    })
  })

  describe('Test that u cannot click on a button . directly after (,),.,+,-,/,*', () => {
    test('(button). !after symbols', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      const slash = screen.getByText('/');
      const times = screen.getByText('*');
      const plus = screen.getByText('+');
      const minus = screen.getByText('-');
      const decimalPoint = screen.getByText('.');
      const openingBracket = screen.getByText('(');
      const closingBracket = screen.getByText(')');
      const one = screen.getByText('1');
      fireEvent.click(openingBracket);
      fireEvent.click(decimalPoint);
      fireEvent.click(decimalPoint);
      fireEvent.click(one);
      fireEvent.click(closingBracket);
      fireEvent.click(decimalPoint);
      fireEvent.click(plus);
      fireEvent.click(decimalPoint);
      fireEvent.click(one);
      fireEvent.click(minus);
      fireEvent.click(decimalPoint);
      fireEvent.click(one);
      fireEvent.click(slash);
      fireEvent.click(decimalPoint);
      fireEvent.click(one);
      fireEvent.click(times);
      fireEvent.click(decimalPoint);
      expect(inputField.getAttribute('value')).toBe('(1)+1-1/1*');
    })
  })

  describe('Test that u cannot click on a button + directly after (,.,+,-,/,*', () => {
    test('(button)+ !after symbols', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      const slash = screen.getByText('/');
      const times = screen.getByText('*');
      const plus = screen.getByText('+');
      const minus = screen.getByText('-');
      const decimalPoint = screen.getByText('.');
      const openingBracket = screen.getByText('(');
      const closingBracket = screen.getByText(')');
      const one = screen.getByText('1');
      fireEvent.click(openingBracket);
      fireEvent.click(plus);
      fireEvent.click(plus);
      fireEvent.click(one);
      fireEvent.click(closingBracket);
      fireEvent.click(plus);
      fireEvent.click(one);
      fireEvent.click(decimalPoint);
      fireEvent.click(plus);
      fireEvent.click(one);
      fireEvent.click(minus);
      fireEvent.click(plus);
      fireEvent.click(one);
      fireEvent.click(slash);
      fireEvent.click(plus);
      fireEvent.click(one);
      fireEvent.click(times);
      fireEvent.click(plus);
      expect(inputField.getAttribute('value')).toBe('(1)+1.1-1/1*');
    })
  })

  describe('Test that u cannot click on a button - directly after .,-,-,/', () => {
    test('(button)- !after symbols', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      const slash = screen.getByText('/');
      const times = screen.getByText('*');
      const plus = screen.getByText('+');
      const minus = screen.getByText('-');
      const decimalPoint = screen.getByText('.');
      const openingBracket = screen.getByText('(');
      const closingBracket = screen.getByText(')');
      const one = screen.getByText('1');
      fireEvent.click(openingBracket);
      fireEvent.click(minus);
      fireEvent.click(minus);
      fireEvent.click(one);
      fireEvent.click(closingBracket);
      fireEvent.click(plus);
      fireEvent.click(minus);
      fireEvent.click(one);
      fireEvent.click(decimalPoint);
      fireEvent.click(minus);
      fireEvent.click(one);
      fireEvent.click(minus);
      fireEvent.click(minus);
      fireEvent.click(one);
      fireEvent.click(slash);
      fireEvent.click(minus);
      fireEvent.click(one);
      fireEvent.click(times);
      fireEvent.click(minus);
      expect(inputField.getAttribute('value')).toBe('(-1)+1.1-1/1*-');
    })
  })

  describe('Test that u cannot click on a button / directly after (,.,+,-,/,*', () => {
    test('(button)/ !after symbols', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      const slash = screen.getByText('/');
      const times = screen.getByText('*');
      const plus = screen.getByText('+');
      const minus = screen.getByText('-');
      const decimalPoint = screen.getByText('.');
      const openingBracket = screen.getByText('(');
      const closingBracket = screen.getByText(')');
      const one = screen.getByText('1');
      fireEvent.click(openingBracket);
      fireEvent.click(slash);
      fireEvent.click(slash);
      fireEvent.click(one);
      fireEvent.click(closingBracket);
      fireEvent.click(plus);
      fireEvent.click(one);
      fireEvent.click(decimalPoint);
      fireEvent.click(plus);
      fireEvent.click(one);
      fireEvent.click(minus);
      fireEvent.click(plus);
      fireEvent.click(one);
      fireEvent.click(slash);
      fireEvent.click(plus);
      fireEvent.click(one);
      fireEvent.click(times);
      fireEvent.click(plus);
      expect(inputField.getAttribute('value')).toBe('(1)+1.1-1/1*');
    })
  })

  describe('Test that u cannot click on a button * directly after (,.,+,-,/,*', () => {
    test('(button)* !after symbols', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      const slash = screen.getByText('/');
      const times = screen.getByText('*');
      const plus = screen.getByText('+');
      const minus = screen.getByText('-');
      const decimalPoint = screen.getByText('.');
      const openingBracket = screen.getByText('(');
      const closingBracket = screen.getByText(')');
      const one = screen.getByText('1');
      fireEvent.click(openingBracket);
      fireEvent.click(times);
      fireEvent.click(times);
      fireEvent.click(one);
      fireEvent.click(closingBracket);
      fireEvent.click(times);
      fireEvent.click(one);
      fireEvent.click(decimalPoint);
      fireEvent.click(times);
      fireEvent.click(one);
      fireEvent.click(minus);
      fireEvent.click(times);
      fireEvent.click(one);
      fireEvent.click(slash);
      fireEvent.click(times);
      fireEvent.click(one);
      fireEvent.click(plus);
      fireEvent.click(times);
      expect(inputField.getAttribute('value')).toBe('(1)*1.1-1/1+');
    })
  })

  describe('Test that when u click on button DEL all the input will be deleted', () => {
    test('(button) DEL dels', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      const one = screen.getByText('1');
      const DEL = screen.getByText('DEL');
      fireEvent.click(one);
      fireEvent.click(one);
      fireEvent.click(DEL);
      expect(inputField.getAttribute('value')).toBe('');
    })
  })

  describe('Test that when u click on button CE the last entry will be removed', () => {
    test('(button) CE clears entry', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      const one = screen.getByText('1');
      const CE = screen.getByText('CE');
      fireEvent.click(one);
      fireEvent.click(one);
      fireEvent.click(CE);
      expect(inputField.getAttribute('value')).toBe('1');
    })
  })

  describe('Test that when u click on a button = on ur nameboard it will do the calculation', () => {
    test('(button) = calculates', () => {
      const { getByPlaceholderText } = render(<Calculator />);
      const inputField = getByPlaceholderText('Calculation');
      const one = screen.getByText('1');
      const plus = screen.getByText('+');
      const calculate = screen.getByText('=');
      fireEvent.click(one);
      fireEvent.click(plus);
      fireEvent.click(one);
      fireEvent.click(calculate);
      expect(inputField.getAttribute('value')).toBe('2');
    })
  })

});