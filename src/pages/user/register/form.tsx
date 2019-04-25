import React from 'react';

export interface Props {
  classes: { [key: string]: string };
}

interface State {
  showPassword: boolean;
  showEnterPassword: boolean;
  params: {
    [key: string]: any;
  };
  sendCode: boolean;
  [key: string]: any;
}

const styles = theme => ({
  form: {
    padding: '0px 50px 50px 50px',
  },
  formControl: {
    minWidth: 120,
    width: '100%',
  },
  formSelectControl: {
    width: 'calc(50% - 6px)',
  },
  formLeftSelectControl: {
    marginRight: 6,
  },
  formRightSelectControl: {
    marginLeft: 6,
  },
  input: {
    height: 60,
    marginTop: '0px !important',
    icon: {
      fontSize: 40,
    },
  },
  button: {
    minWidth: 115,
    TextAlign: 'right',
    // textAlign: 'right',
    color: '#FF40AEA8',
  },
  submitButton: {
    marginTop: 50,
    borderRadius: 0,
    color: '#FFFFFF',
    width: '100%',
    backgroundColor: '#40AEA8',
    fontSize: 20,
  },
});
class RegisterForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showPassword: false,
      showEnterPassword: false,
      sendCode: false,
      params: {
        exp: '',
        role: '',
      },
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.params);
  };

  sendCode = () => {
    this.setState({
      sendCode: true,
    });
  };

  handleClickShowPassword(name: string) {
    // eslint:disable //
    this.setState({
      [name]: !this.state[name],
    });
  }

  inputChange = e => {
    const { name, value } = e.target;
    this.setState({
      params: Object.assign({}, this.state.params, { [name]: value }),
    });
  };

  render() {
    const { classes } = this.props;
    const { showPassword, showEnterPassword, sendCode, params } = this.state;
    const { role, exp } = params;
    return (
      <div className="register">
        <form onSubmit={this.handleSubmit} className={classes.form}>
          sadfsada
        </form>
      </div>
    );
  }
}

export default RegisterForm;

// tslint:disable //——忽略该行以下所有代码出现的错误提示
// tslint:enable //——当前ts文件重新启用tslint
// tslint:disable-line——忽略当前行代码出现的错误提示
// tslint:disable-next-line——忽略下一行代码出现的错误提示
