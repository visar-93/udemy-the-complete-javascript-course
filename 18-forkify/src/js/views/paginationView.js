import View from './View.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2
import { func } from 'assert-plus';

class PaginationView extends View {
    _parentElement = document.querySelector('.pagination');

    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn--inline');
           if(!btn) return;

            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    };

    _generateMarkup() {
        const curPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);

        // Page 1, and there are other pages
        if(curPage === 1 && numPages > 1) {
            return this._generateMarkupButtonNext(curPage);
        }
        
        // Last page
        if(curPage === numPages && numPages > 1) {
           return this._generateMarkupButtonPrev(curPage);
        }
        
        // Other page
        if(curPage < numPages) {
            const prev = this._generateMarkupButtonPrev(curPage);
            const next = this._generateMarkupButtonNext(curPage);
           return `${prev}${next}`;            
        }

        // Page 1, and there are NO other pages
        return '';
    };

    _generateMarkupButtonNext(page) {
        return `
        <button data-goto="${page + 1}" class="btn--inline pagination__btn--next">
        <span>Page ${page + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>
        `;
    };
    _generateMarkupButtonPrev(page) {
        return `
        <button data-goto="${page - 1}" class="btn--inline pagination__btn--prev">
        <span>Page ${page - 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
      </button>
        `;
    };
};

export default new PaginationView();