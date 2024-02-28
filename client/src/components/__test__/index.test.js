import {render} from '@testing-library/react'
import BMI from '../../pages/Home/components/bmi/BMI'

describe('it test BMI component', () =>{
    test('render BMI component without breaking', ()=>{
        render(<BMI />)
    })
})


