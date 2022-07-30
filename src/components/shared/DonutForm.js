import { Form, Button,  } from 'react-bootstrap'
 
const DonutForm = (props) => {
     return (
          <Form onSubmit={props.handleSubmit}>
              <Form.Label htmlFor="name">Name</Form.Label>
              <Form.Control
                  placeholder="What is your donut's name?"
                  name="name"
                  id="name"
                  onChange={props.handleChange}
              />
              <Form.Label htmlFor="from">From</Form.Label>
              <Form.Control
                  placeholder="Where is this donut from?"
                  name="from"
                  id="from"
                  onChange={props.handleChange}
              />
              <Form.Label htmlFor="thoughts">Thoughts</Form.Label>
              <Form.Control
                  placeholder="What are your thoughts/notes on this donut?"
                  type="string"
                  name="thoughts"
                  id="thoughts"
                  onChange={props.handleChange}
              />
              <Form.Check
                  label="Have you tried this donut yet?"
                  name="haveEaten"
                  defaultChecked={ false  }
               //    onChange={props.handleChange}
              />
              <Button type="submit">Submit</Button>
          </Form>
      )
 }
 
 export default DonutForm 