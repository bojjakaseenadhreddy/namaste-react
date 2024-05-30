const AboutComponent = () => {
    return (
        <div>
            <h2>This is About me page</h2>
            <form>
                <input className="p-4 m-4" type="text" placeholder="name"/>
                <input className="p-4 m-4"  type="text" placeholder="email"/>
                <textarea className="p-4 m-4"  type="text" placeholder="description" />
                <button className="p-4 m-4" >Submit</button>
            </form>
        </div>
    )
}
export default AboutComponent;