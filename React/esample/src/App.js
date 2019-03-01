import React, { Component } from 'react';
import { NavLink as RouterNavLink, Link,  Route } from 'react-router-dom'
import { TabContent, TabPane, Nav, NavItem, Navbar, NavLink, Button, Input } from 'reactstrap';
import classnames from 'classnames';


class OneTab extends Component {
  constructor (props) {
    super(props);
    this.state = {
      activeTab: '1',
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle(str){
    this.setState({
      activeTab: str
    });
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab=== '1' })}
              onClick={() => this.toggle('1')}> One</NavLink>
          </NavItem>
          <NavItem > 
            <NavLink className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => this.toggle('2')}> Two</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => this.toggle('3')}> Three</NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            {`fragment${this.props.number}-1`}
          </TabPane>
          <TabPane tabId="2">
            {`fragment${this.props.number}-2`}
          </TabPane>
          <TabPane tabId="3">
            {`fragment${this.props.number}-3`}
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

class Dashboard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      number: 0,
    };
    this.renderTest = this.renderTest.bind(this);
    this.renderHa = this.renderHa.bind(this);
  }
  renderTest(){
    this.setState({number: 1000 });
  }
  renderHa(){
    const ret = [];
    for(let i = 0; i< this.state.number; i++){
      ret.push(<OneTab key={`oneTab_${i}`} number={i}></OneTab>);
    }
    return ret;
  }
  render() {
    return (
      <div style={{margin:'15px'}}>
        <Button onClick={this.renderTest}>点击渲染1000个Tab</Button> <br /><br />
        <div>
          { this.renderHa() }
        </div>
      </div>
    );
  }
}

class AnotherPage extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div style={{margin: '15px'}}>
        <OneTab number={"anotherPage"}></OneTab>
      </div>;
  }
}

class SecurityPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      input: '',
      inputShow: ''
    };
    this.search = this.search.bind(this);
    this.change = this.change.bind(this);
  }
  search(){
    this.setState({
      inputShow: this.state.input
    });
  }
  change(event){
    this.setState({
      input: event.target.value
    });
  }
  render() {
    return (<div style={{margin: '15px'}}>
      你可以输入 <br />
      <code>Aiainfo</code> 或者 <br />
      <code>&lt;script&gt;alert("I take over the browser now!")&lt;/script&gt;</code>
      <Input type="text" value={this.state.input} onChange={this.change} />
      <Button onClick={this.search}>搜索</Button>
      <br />
      你搜索的内容为: 
      <span> {this.state.inputShow} </span>
    </div>)
  }
}

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render() {
    return (<div>
        <Navbar color="dark" expand="md">
          <Nav navbar>
            <NavItem>
              <Button color="link">
                <Link to="/dashboard">响应速度</Link>
              </Button>
            </NavItem>
            <NavItem>
              <Button color="link">
                <Link to="/testAnother">跳转速度</Link>
              </Button>
            </NavItem>
            <NavItem>
              <Button color="link">
                <Link to="/security">安全测试</Link>
              </Button>
            </NavItem>
            <NavItem>
              <Button color="link">
                <a target="_blank" href="./jquery/index.html">打开jQuery</a>
              </Button>
            </NavItem>
          </Nav>
        </Navbar>
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/testAnother" component={AnotherPage} />
        <Route exact path="/security" component={SecurityPage} />
      </div>);
  }
}
export default App;
