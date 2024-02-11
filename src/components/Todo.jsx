import { useEffect, useState } from 'react';
import { Container } from '.';
import AlertComponent from './AlertComponent';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [showTodo, setShowTodo] = useState(null);
    const [hasMore, setHasMore] = useState(true);
    const [open, setOpen] = useState(false);
    const [alertText, setAlertText] = useState('');
    const [severity, setSeverity] = useState('success');

    const fetchTodosData = async () => {
        const url = `https://jsonplaceholder.typicode.com/todos`;
        const response = await fetch(url);
        const data = await response.json();
        setTodos((prevTodos) => [...prevTodos, ...data]);
        setHasMore(data.length > 0);
    };
    
    useEffect(() => {
        fetchTodosData();
    }, []);
    
    const handleClick = (item) => {
        setShowTodo(item)
    };

    const handleComplete = (todo) => {
        if (todo.completed == false) {
            todo.completed = true;
            setOpen(true);
            setSeverity('success')
            setAlertText(`Marking todo '${todo.title}' as completed`)
            setShowTodo(null);
        }
        else {
            setOpen(true);
            setSeverity('info')
            setAlertText(`'${todo.title}' is already marked as completed`)
            setShowTodo(null);
        }
    }

    const handleDelete = (todo) => {
        const updatedTodos = todos.filter((item) => item.id !== todo.id);
        setTodos(updatedTodos);
        setOpen(true);
        setSeverity('success');
        setAlertText("Todo Deleted Successfully")
        setShowTodo(null);

    }

    return (
        <>
            <AlertComponent open={open} setOpen={setOpen} alertText={alertText} severity={severity} />
            <Container> 
                <LeftSection todos={todos} hasMore={hasMore} fetchTodosData={fetchTodosData} handleClick={handleClick} />

                <RightSection showTodo={showTodo} handleComplete={handleComplete} handleDelete={handleDelete} />
            </Container>

        </>
    );
};

export default Todo;
