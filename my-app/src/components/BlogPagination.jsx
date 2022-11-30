


const BlogP = ({ data }) => {

    // const next = data.links[0].url;
    // const prev = data.links[data.links.length - 1].url;
    // const curr = data.current_page;
    // console.log(data.current_page);

    
    return (
        <div>
            <div className="pagination-area d-flex flex-wrap justify-content-center">
                <ul className="pagination d-flex flex-wrap m-0">
                    <li className="prev"><a href="#"><span>« previous</span></a></li>
                    <li><a href="#"></a></li>
                    <li><a href="#" className="active d-none d-md-block">2</a></li>
                    <li><a href="#" className="d-none d-md-block">3</a></li>
                    <li className="dot">....</li>
                    <li><a href="#" className="d-none d-md-block">4</a></li>
                    <li className="next"><a href="#"><span>next »</span></a></li>
                </ul>
            </div>
        </div>
    )
}

export default BlogP