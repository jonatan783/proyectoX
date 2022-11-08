import Pagination from 'react-bootstrap/Pagination';

function AdvancedExample() {
    return (
        <Pagination>
            <Pagination.First />
            <Pagination.Prev />

            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>

            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    );
}

export default AdvancedExample;