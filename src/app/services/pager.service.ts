const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));

export class PagerService {
    getPager(totalPages: number, currentPage: number = 0) {

        let startPage: number;
        let endPage: number;
        if (totalPages <= 5) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 3) {
                startPage = 1;
                endPage = 5;
            } else if (currentPage + 1 >= totalPages) {
                startPage = totalPages - 4;
                endPage = totalPages;
            } else {

                if ((totalPages - (currentPage - 2)) === 5) {
                    startPage = currentPage - 1;
                    endPage = currentPage + 3;
                } else {
                    startPage = currentPage - 2;
                    endPage = currentPage + 2;
                }
            }
        }

        const pages = range(startPage, endPage, 1);

        // return object with all pager properties required by the view
        return {
            currentPage,
            totalPages,
            startPage,
            endPage,
            pages
        };
    }
}
