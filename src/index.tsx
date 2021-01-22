import React from 'react';
import ReactDOM from 'react-dom';

interface TextBoxProps {
    version: string;
}
interface TextBoxState {
    name: string;
}

class TextBox extends React.Component<TextBoxProps, TextBoxState> {
    constructor(props: TextBoxProps) {
        super(props);
        this.state = {
            name: 'たからーん'
        };
    }

    render() {
        let favorites: string[] = ['ハンバーガー', '寿司', '牛丼']
        return ([
            <p>{this.state.name}v{this.props.version}さん、こんにちは！</p>,
            <p>はやくReact使えるようになりたい！</p>,
            <ul>
                {/* liタグは波括弧で囲まなくていい！ */}
                {favorites.map((thing: string) => <li>{thing}</li>)}
            </ul>
        ]);
    }
}

ReactDOM.render(
    <TextBox version="v1.0.0"/>,
    document.getElementById('app')
);