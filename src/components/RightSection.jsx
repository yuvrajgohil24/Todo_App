import React from 'react'
import { ButtonContainer, RightPartContainer } from '.'
import { Box, Button, Typography } from '@mui/material'

const RightSection = ({showTodo, handleComplete, handleDelete}) => {
    return (
        <RightPartContainer>
            <Box>
                {showTodo ? (
                    <Box>
                        <Typography><strong>Title</strong>: {showTodo.title}</Typography>
                        <Typography><strong>UserId</strong>: {showTodo.userId}</Typography>
                        <ButtonContainer style={{ marginTop: '20px' }}>
                            <Button variant="contained" color='error' style={{ borderRadius: '8px' }} onClick={() => handleDelete(showTodo)}>Delete</Button>

                            <Button variant="contained" color='success' style={{ borderRadius: '8px' }} onClick={() => handleComplete(showTodo)}>Completed</Button>

                        </ButtonContainer>
                    </Box>
                ) :
                    <Typography style={{ fontWeight: '600', color: '#64686e' }}>Select a To-Do to modify it</Typography>}
            </Box>
        </RightPartContainer>
    )
}

export default RightSection
