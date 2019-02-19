class ColorCard extends React.Component {
    constructor(props) {
        super(props) //what does super do???
        let initialState = {
            colors: [
                {
                    hexCode: '#' + Math.floor(Math.random() * 16777215).toString(16),
                    isLocked: false
                },
                {
                    hexCode: '#' + Math.floor(Math.random() * 16777215).toString(16),
                    isLocked: false
                },
                {
                    hexCode: '#' + Math.floor(Math.random() * 16777215).toString(16),
                    isLocked: false
                },
                {
                    hexCode: '#' + Math.floor(Math.random() * 16777215).toString(16),
                    isLocked: false
                },
                {
                    hexCode: '#' + Math.floor(Math.random() * 16777215).toString(16),
                    isLocked: false
                }
            ] //colors array
        }//initial state
        this.state = initialState
    }//constructor
    random = () =>  {
        let newColors = this.state.colors.map(function (color, index) {
            if (color.isLocked === false) {
                return color.hexCode = '#' + Math.floor(Math.random() * 16777215).toString(16)
            } else {
                return color
            }
        })
        this.setState({
            hexCode: newColors,
        })
        
    }//random function
    toggleLock = (i) => {
        
        // let lockButton = this.state.colors.map(function (locked, index) {

        //     console.log(toggle)
        //     if (toggle === index) {
        //         document.getElementById('lockButton').addEventListener('click', function() {
        //             document.getElementById('lockButton').innerHTML = 'Color Locked'
        //             document.getElementById('lockButton').disabled = true
        //         })
        //     //returning toggleLock ???????
        //     }
        // })
        // this.setState({
        //     isLocked: lockButton
        // })

        console.log('entered toggle')

    } //toggleLock

    render() {
        console.log('This is the render being called', this.props)
        return (
            <div>
                <div className='text-center fixed top'>
                    <button onClick={this.random} className="btn btn-secondary">Randomize</button>
                </div>
                <div>
                    {
                        this.state.colors.map(function(color,index) {
                            // console.log(color)
                            return <Color toggle={() => this.toggleLock(index)} color={color.hexCode} key={index} />
                        })
                    }
                </div>
            </div>
        )

        //return html card with color logic being called in through another React Componenet
    }

}//ColorCard

const Color = props => {
    // console.log('entered colors', props)

    let { color, isLocked } = props
    // let { toggle, }
    console.log(props)

    return ( 
        <div style={{backgroundColor: props.color}} className="card-body">
            <h5 className="card-title">{props.color}</h5>
            <button onClick={props.toggle} id="lockButton" className="btn btn-primary">Lock Color</button>
        </div>
    )
}

ReactDOM.render(<ColorCard />, document.getElementById('root'))