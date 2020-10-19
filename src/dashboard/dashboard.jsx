import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {getSummary} from './dashboardActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'

class Dashboard extends Component {

    componentWillMount() {
        this.props.getSummary()
    }

    render() {
        const petList = this.props.summary
        return(
            <div>
                <ContentHeader title='Início'/>
                <Content>
                    <Row cols='12 12 12 4'>
                        <div className="titulo-card form-user">
                            <h4>Filtro</h4>
                        </div> 
                        <form>
                            <br/>
                            <label htmlFor="distancia">Distancia máxima em Km</label><br/>
                            <input id="distancia" distancia="name" type="number"></input>
                            <br/>
                            <input id="enviar" name="enviar" type="button" value="Atualizar"></input>
                        </form>
                    </Row>
                    <Row cols='12 12 12 8'>

                    </Row>
                    <Row cols='12'>
                        <div className="titulo-card form-user">
                            <h4>Lista</h4>
                        </div> 
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({summary: state.dashboard.summary})
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)