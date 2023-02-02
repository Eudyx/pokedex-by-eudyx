export const usePagination = () => {
    // Gettin the numbers of the buttons pages
    const getPagination = (currentPage, numberOfPages) => {
        const res = [];
        const maxPages = 5;

        for (let i = 1; i < numberOfPages; i++) res.push(i);

        return res.filter(x => 
          x >= currentPage - 1 && x < currentPage +
          (currentPage > 1 ? maxPages - 1 : maxPages)
        );
    }

    return [getPagination];
}