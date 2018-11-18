class SheldonContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showName: false,
            currentMessage: "Bazingaa!!"
        }
    }
    hide() {
        this.setState({
            showName: false
        })
    }
    hint() {
        alert(" Hover over bazinga")
    }
    showBtn() {
        console.log("show btn")
        this.setState({
            showName: true
        })
    }
    render() {
        let showName = this.state.showName;
        let currentMessage = this.state.currentMessage;
        // let { showName, currentMessage } = this.state;

        return (
            <div>
                <div className="leftClass">
                    <h1> Hello People </h1>
                    <button onClick={() => {
                        this.showBtn.bind(this)()
                    }}> Show Name </button>
                    <button onClick={() => {
                        console.log("yolo")
                        this.hint()
                    }}> hint </button>
                    <button onClick={this.hide.bind(this)}> Hide Now </button>
                    Showing name = {showName.toString()} <br />
                </div>
                <div className="rightClass" style={{ visibility: showName ? 'visible' : 'hidden' }}>
                    <p>Try to find my name</p>
                    {showName ? <span
                        onMouseEnter={() => {
                            this.setState({
                                currentMessage: "My name is Sheldon"
                            })
                        }}
                        onMouseLeave={() => {
                            this.setState({
                                currentMessage: "Bazingaa!"
                            })
                        }}
                    > yolo {currentMessage} </span> : ''}
                </div>
            </div>
        )
    }
}