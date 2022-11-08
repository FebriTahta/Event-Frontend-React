function BlockEvent({ dataEvents }) {
    return (
        <div>
            <div >
                <div className="post-item" >
                    <div className="post-thumb" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" }}>
                        <a href="#"><img src={'http://127.0.0.1:8000/storage/event_image/' + dataEvents.event_image} alt="blog" /></a>
                    </div>
                    <div className="post-content" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px", borderEndEndRadius: "10px", borderEndStartRadius: "10px" }}>
                        <div className="row">
                            <div className="col-md-9">
                                <a href="#" style={{ padding: "0" }}>
                                    <h5 style={{ lineHeight: "22px", fontSize: "16px" }}>
                                        {dataEvents.event_name.substring(0, 45)}..
                                    </h5>
                                    <br />
                                </a>
                                <div className="meta-post">
                                    <span className="by">Posted By <a className="name" href="#">Rajib Raj</a> at <a className="date" href="#">March 4, 2020</a></span>
                                </div>
                            </div>
                            <div className="col-md-3">
                                {dataEvents.event_name.length}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlockEvent;