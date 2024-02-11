import { LeftPartContainer, TodosTitle } from '.';
import { Box, Card, CardContent } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';

const LeftSection = ({todos, fetchTodosData, hasMore, handleClick}) => {
    return (
        <LeftPartContainer>
            <Box>
                <InfiniteScroll
                    dataLength={todos.length}
                    next={fetchTodosData}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                    scrollThreshold={0.9} // Load more when the user reaches 90% of the page
                >
                    {todos.map((item, id) => (
                        <Card key={id}>
                            <CardContent style={{ padding: '5px 0' }}>
                                <TodosTitle onClick={() => handleClick(item)}>
                                    {item.title}
                                </TodosTitle>
                            </CardContent>
                        </Card>
                    ))}
                </InfiniteScroll>
            </Box>
        </LeftPartContainer>
    )
}

export default LeftSection
