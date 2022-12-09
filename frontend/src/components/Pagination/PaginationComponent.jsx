import style from './pagination.module.scss'

function PaginationComponent({
    handleFirst,
    handleItemLeft,
    handleItemRight,
    handleLast,
    pagination,
}
) {
    return (
        <div className={style.container}>
            {pagination[0] ?
                <span className={style.button} onClick={() => handleFirst()}>
                    {pagination[0]}
                </span> : null}

            {pagination[1] ?
                <span className={style.button} onClick={() => handleItemLeft()}>
                    {pagination[1]}
                </span> : null}

            {pagination[2] ?
                <span className={`${style.button} ${style.selected}`}>
                    {pagination[2]}
                </span> : null
            }

            {pagination[3] ?
                <span className={style.button} onClick={() => handleItemRight()}>
                    {pagination[3]}
                </span> : null}

            {pagination[4] ?
                <span className={style.button} onClick={() => handleLast()}>
                    {pagination[4]}
                </span> : null}
        </div>
    );
}

export default PaginationComponent;