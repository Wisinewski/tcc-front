import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {addNewPet, getSummary, atualizaUsuario} from './userProfileActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import {selectTab, showTabs} from '../common/tab/tabActions'

class UserProfile extends Component {

    componentWillMount() {
        this.props.getSummary()
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }

    render() {
        const infosProfile = this.props.summary
        console.log(infosProfile)
        return(
            <div>
                <ContentHeader title='Perfil'/>
                <Content>
                    <Row cols='12 12 12 5'>
                        <div className="titulo-card form-user">
                            <h4>Informações</h4>
                        </div> 
                        <form name="formUsuario" onSubmit={atualizaUsuario}>
                            <input id="id" name="id" type="hidden" value={`${infosProfile[1]._id}`}></input>
                            <br/>
                            <label htmlFor="name">Nome</label><br/>
                            <input id="nome" name="nome" type="text" value={`${infosProfile[1].nome}`}></input>
                            <br/>
                            <label htmlFor="email">Email</label><br/>
                            <input id="email" name="email" type="text" value={`${infosProfile[1].email}`}></input>
                            <br/>
                            <label htmlFor="cpf">Cpf</label><br/>
                            <input id="cpf" name="cpf" type="text" value={`${infosProfile[1].cpf}`}></input>
                            <br/>
                            <label htmlFor="telefone">Telefone</label><br/>
                            <input id="telefone" name="telefone" type="text" value={`${infosProfile[1].telefone}`}></input>
                            <br/>
                            <label htmlFor="cuidador">Cuidador?</label><br/>
                            <input id="cuidador" name="cuidador" type="text" value={`${infosProfile[1].user_cuidador}`}></input>
                            <br/>
                            <input id="btnAtualizar" name="btnAtualizar" type="submit" value="Atualizar"></input>
                        </form>
                    </Row>
                    <Row cols='12 12 12 7'>
                        <div className="titulo-card">
                            <h4>Pets</h4>
                        </div> 
                        <Tabs>
                            <TabsHeader>
                                <TabHeader label='Listar' icon='bars' target='tabList' />
                                <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                                <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                                <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                            </TabsHeader>
                            <TabsContent>
                                <TabContent id='tabList'>
                                    {infosProfile[0].map((value, index) => {
                                        return <ValueBox cols='12 6' key={index} idPet={value._id} color={value.tipo_pet} icon='paw'
                                            value={`${value.nome}`} text={value.tipo_pet}/>
                                    })}
                                </TabContent>
                                <TabContent id='tabCreate'>
                                    <span>create</span>
                                </TabContent>
                                <TabContent id='tabUpdate'>
                                    <span>update</span>
                                </TabContent>
                                <TabContent id='tabDelete'>
                                    <span>delete</span>
                                </TabContent>
                            </TabsContent>
                        </Tabs>
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({summary: state.userProfile.summary})
const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs, getSummary}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)