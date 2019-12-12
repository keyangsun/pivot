import React, { ReactElement } from 'react';
import './pivot_list.css';

interface Props {

}

interface State {

}

class PivotList extends React.Component<Props, State>  {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }
    
    render(): ReactElement {
        return (
            <div className="pivot-list">
                <header className="header">
                    <div>
                        <button>Gridify</button>
                    </div>
                    <div>
                        <span>
                            <label htmlFor="group-by">Group By</label>
                            <select name="group-by" id="group-by">
                                <option value="day">Day</option>
                                <option value="week">Week</option>
                                <option value="month">Month</option>
                                <option value="year">Year</option>
                            </select>
                        </span>
                        <span>
                            <label htmlFor="filter-by">Filter By</label>
                            <select name="filter-by" id="filter-by">
                                <option value="day">Day</option>
                                <option value="week">Week</option>
                                <option value="month">Month</option>
                                <option value="year">Year</option>
                            </select>
                        </span>
                    </div>
                </header>
                <main>
                    <aside className="left-drawer open">
                        <div>
                            <span>
                                <label htmlFor="sort-by">Sort By</label>
                                <select name="sort-by" id="sort-by">
                                    <option value="day">Day</option>
                                    <option value="week">Week</option>
                                    <option value="month">Month</option>
                                    <option value="year">Year</option>
                                </select>
                            </span>
                        </div>
                        <div>
                            <span>
                                <h4>Date Range</h4>
                            </span>
                            <span>
                                <h4>Date Range</h4>
                            </span>
                        </div>
                        <button>Left icon</button>
                    </aside>
                    <section className="photo-grid">
                        <span>
                            <figure>
                                <img src="" alt="Data Image"/>
                                <figcaption>image</figcaption>
                            </figure>
                        </span>
                        <h3>Image Size</h3>
                        <button>- icon</button>
                        <button>+ icon</button>
                    </section>
                    <div className="right-drawer">
                        <details>
                            <summary>Data</summary>
                            <div>
                                <span>
                                    <label htmlFor="label">Label:</label>
                                    <input type="text" value="Label Name"/>
                                </span>
                                <span>
                                    <label htmlFor="label">Label:</label>
                                    <input type="text" value="Label Name" />
                                </span>
                            </div>
                        </details>
                        <button>Right icon</button>
                    </div>
                </main>
            </div>
        )
    }
}

export default PivotList;