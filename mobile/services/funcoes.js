import CheckBox from '@react-native-community/checkbox';

function listarAluno() {
    const listaAluno = listaAlunos.map((listaAluno) => {
        return (
            <View style={{ flexDirection: 'row' }} key={listaAluno.aluno._id}>
                <CheckBox
                    value={listaAluno.presente}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    onChange={() => setAtualizaAluno((prevState) => prevState.concat({
                        aluno: {
                            _id: listaAluno.aluno._id,
                            nome: listaAluno.aluno.nome
                        }
                    }))}
                />
                <Text style={{ marginTop: 5 }}>{listaAluno.aluno.nome}</Text>
            </View>
        );
    });
    return listaAluno;
}   


