import React, { Component } from 'react'
import { ConceptContext } from '../../context/concepts';

export default class SingleConcept extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.match.params.name
        }
    }

    static contextType = ConceptContext;

    render() {
        const {getConcept} = this.context;
        const concept = getConcept(this.state.name);
        console.log(concept)
        return (
            <div>
                
            </div>
        )
    }
}
