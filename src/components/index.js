import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const Container = styled(Box)({
    display: 'flex',
    margin: '6.6vh 18vh',
    // border: '0.5px solid #e3e3e3',
    boxShadow: '10px 10px 15px 15px  #e6e3e3',
    borderRadius: "6px",
});

const LeftPartContainer = styled(Box)({
    width:'45%',
    overflowY: 'auto',
    borderTopLeftRadius: '12px',
    borderBottomLeftRadius: '12px',
    maxHeight: '85vh',
    '&::-webkit-scrollbar': {
        width: '5px',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#888',
        borderRadius: '5px',
    },
});


const RightPartContainer = styled(Box)({
    backgroundColor:'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: '12px',
    borderBottomRightRadius: '12px',
    width: '55%',
});

const ButtonContainer = styled(Box)({
    display: 'flex',
    gap: 20,
    alignItems: 'baseline',
    justifyContent: 'center',
    // paddingLeft: '12vh',
});

const TodosTitle = styled(Typography)({
    fontWeight: '600',
    borderBottom: '1px solid black',
    padding: '10px 20px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
});

export {Container, TodosTitle, ButtonContainer, LeftPartContainer, RightPartContainer}