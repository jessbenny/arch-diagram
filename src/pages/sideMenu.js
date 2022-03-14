import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'


export default function SideMenu({ dataChecked,handleChange }) {
  return (
    <div className='d-flex flex-column ms-2 mt-2'>
      <Typography variant='h3'>Components</Typography>
      <FormGroup>
        {
          Object.keys(dataChecked).map(key => {
            return (
              <FormControlLabel
              control={<Checkbox
              key={key}
              checked={dataChecked[key].checked}
              onChange={handleChange.bind(this, key)} />}
              label={dataChecked[key].label} />
            )
          })
        }
      </FormGroup>
    </div>
  )
}
