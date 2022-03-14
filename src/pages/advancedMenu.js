import { Accordion, AccordionSummary, AccordionDetails, Checkbox, FormControlLabel, MenuItem, MenuList, Paper, Typography, RadioGroup, FormControl, FormLabel, Radio } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AdvancedMenu({ data, handleChange, handleApplicationChange, handleComputeChange }) {
    return (
        <Paper className="p-1 me-2">
            <Accordion className="ms-2 me-2 mt-2 mb-2">
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography>Application</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="radio-buttons-application-label"
                            defaultValue="Web"
                            name="radio-buttons-application"
                            onChange={handleApplicationChange}
                        >
                            <MenuList>
                                <MenuItem>
                                    <FormControlLabel value="Web" control={<Radio />} label="Web" />
                                </MenuItem>
                                <MenuItem>
                                    <FormControlLabel value="Mobile" control={<Radio />} label="Mobile" />
                                </MenuItem>
                            </MenuList>
                        </RadioGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
            {
                data.map((category, i) => {
                    return (
                        <Accordion className="ms-2 me-2 mt-2 mb-2">
                            <AccordionSummary className="mb-2" expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                <Typography>{category['Name']}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <MenuList dense>
                                    {
                                        category['components'].map((item, j) => {
                                            if (item['Key'] === 'Compute_Services')
                                                return (

                                                        <FormControl>
                                                            <RadioGroup
                                                                aria-labelledby="radio-buttons-compute-label"
                                                                name="radio-buttons-application"
                                                                onChange={handleComputeChange}  
                                                            >
                                                                <MenuList>
                                                                    <MenuItem>
                                                                        <FormControlLabel value="Modular" control={<Radio />} label="Modular architecture" />
                                                                    </MenuItem>
                                                                    <MenuItem>
                                                                        <FormControlLabel value="MicroService" control={<Radio />} label="Microservices architecture" />
                                                                    </MenuItem>
                                                                </MenuList>
                                                            </RadioGroup>
                                                        </FormControl>
                                                )
                                            else
                                                return (
                                                    <MenuItem>
                                                        <FormControlLabel
                                                            control={<Checkbox
                                                                key={item['Key']}
                                                                checked={item['checked']}
                                                                onChange={handleChange.bind(this, i, j)}
                                                            />}
                                                            label={item['Text']} />
                                                    </MenuItem>
                                                )
                                        })
                                    }
                                </MenuList>
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }
        </Paper>
    )
}   