import { Close } from "@mui/icons-material";
import { Alert, Collapse, IconButton } from "@mui/material";

const AlertComponent = ({ open, setOpen, alertText, severity }) => {
    return (
        <Collapse in={open}>
            <Alert
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(!open);
                        }}
                    >
                        <Close fontSize="inherit" />
                    </IconButton>
                }
                sx={{ mb: 2 }}
                style={{ fontWeight: '600' }}
                severity={severity}
                variant='filled'
            >
                {alertText}
            </Alert>
        </Collapse>
    )
}

export default AlertComponent