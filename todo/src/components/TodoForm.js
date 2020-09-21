import React, {useState} from 'react';

export default function TodoForm(props) {

    const [value, setValue] = useState('')

        const handleChanges = e => {
          let newValue = {[e.target.name]: e.target.value}
          setValue( newValue.value );
          console.log(value);
        };

        const handleSubmit = e => {
          e.preventDefault()
          props.addItem(e, value)
          setValue('')
        }

          return (
              <form onSubmit={handleSubmit}>
                  <input
                  type="text"
                  value={value}
                  name="value"
                  onChange={handleChanges}
                  ></input>
                  <button>add</button>
              </form>
          )
  } 