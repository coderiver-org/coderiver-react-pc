import React from 'react'
import {Input, InputAdornment, IconButton, Button, FormControl, Select, MenuItem, InputLabel} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import {Visibility, VisibilityOff} from '@material-ui/icons'

export interface Props {

}

interface State {
  showPassword: boolean;
  showEnterPassword: boolean;
  params: object;
  sendCode: boolean;
}

const StyledSelect = withStyles({
  icon: {
    display: 'none'
  }
})(Select);

const styles = theme => ({
  form: {
    padding: '0px 50px 50px 50px'
  },
  formControl: {
    minWidth: 120,
    width: '100%',
  },
  formSelectControl: {
    width: 'calc(50% - 6px)'
  },
  formLeftSelectControl: {
    marginRight: 6
  },
  formRightSelectControl: {
    marginLeft: 6
  },
  input: {
    height: 60,
    marginTop: '0px !important',
    icon: {
      fontSize: 40
    }
  },
  button: {
    minWidth: 115,
    textAlign: 'right',
    color: '#FF40AEA8'
  },
  submitButton: {
    marginTop: 50,
    borderRadius: 0,
    color: '#FFFFFF',
    width: '100%',
    backgroundColor: '#40AEA8',
    fontSize: 20
  }
})
class RegisterForm extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      showPassword: false,
      showEnterPassword: false,
      sendCode: false,
      params: {
        exp: '',
        role: ''
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.params)
  }

  sendCode = () => {
    this.setState({
      sendCode: true
    })
  }

  handleClickShowPassword(name: string) {
    this.setState({
      [name]: !this.state[name]
    })
  }

  inputChange = (e) => {
    const {name, value} = e.target
    this.setState({
      params: Object.assign({}, this.state.params, {[name]: value})
    })
  }

  render() {
    const { classes } = this.props;
    const { showPassword, showEnterPassword, sendCode, params } = this.state
    const { role, exp } = params
    return (
      <div className="register">
        <form onSubmit={this.handleSubmit} className={classes.form}>
          <FormControl className={classes.formControl}>
            <Input
              name={'phone'}
              className={classes.input}
              placeholder="请输入邮箱或手机号"
              onChange={this.inputChange}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <Input
              className={classes.input}
              name={'code'}
              placeholder="输入6位验证码"
              onChange={this.inputChange}
              endAdornment={
                <Button
                  onClick={this.sendCode}
                  className={classes.button}
                >{`${sendCode ? '重新': ''}获取验证码`}</Button>
              }
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <Input
              className={classes.input}
              name={'password'}
              placeholder="密码"
              type={showPassword ? 'text' : 'password'}
              onChange={this.inputChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={this.handleClickShowPassword.bind(this, 'showPassword')}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <Input
              className={classes.input}
              name={'enterpassword'}
              placeholder="确认密码"
              type={showEnterPassword ? 'text' : 'password'}
              onChange={this.inputChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={this.handleClickShowPassword.bind(this, 'showEnterPassword')}
                  >
                    {showEnterPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <Input
              className={classes.input}
              name={'name'}
              placeholder="昵称"
              onChange={this.inputChange}
            />
          </FormControl>
          <FormControl className={`${classes.formSelectControl} ${classes.formLeftSelectControl}`}>
            {role ? null: <InputLabel shrink={false}>选择角色</InputLabel>}
            <StyledSelect
              name={'role'}
              value={role}
              onChange={this.inputChange}
              displayEmpty
              className={classes.input}
            >
              <MenuItem value={10}>产品经理</MenuItem>
              <MenuItem value={20}>设计师</MenuItem>
              <MenuItem value={30}>前端工程师</MenuItem>
              <MenuItem value={40}>移动端端工程师</MenuItem>
              <MenuItem value={50}>小程序</MenuItem>
            </StyledSelect>
          </FormControl>
          <FormControl className={`${classes.formSelectControl} ${classes.formRighttSelectControl}`}>
            {exp ? null: <InputLabel shrink={false}>工作经验</InputLabel>}
            <StyledSelect
              name={'exp'}
              value={exp}
              onChange={this.inputChange}
              displayEmpty
              className={classes.input}
            >
              <MenuItem value={10}>0-3年</MenuItem>
              <MenuItem value={20}>3-5年</MenuItem>
              <MenuItem value={30}>5-9年</MenuItem>
              <MenuItem value={40}>10年以上</MenuItem>
            </StyledSelect>
          </FormControl>
          <Button type="submit" variant="contained" className={classes.submitButton}>
            注册
          </Button>
        </form>
      </div>
    )
  }
}


export default withStyles(styles)(RegisterForm)
