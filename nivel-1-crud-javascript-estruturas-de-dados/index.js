console.log('Olá');
console.log('#ConstruindoCRUDS');

// [CRUD] JavaScript BÁSICO 
const miniTwitter = {
    usuarios: [
        {
            username: 'alysson.silva',
        }
    ],
    posts: [
        {
            id: 1,
            owner: 'alysson.silva',
            content: 'Meu primeiro tweet'
        }
    ],
};
// CREATE
function criaPost(dados) {
    miniTwitter.posts.push({
        id: miniTwitter.posts.length + 1,
        owner: dados.owner,
        content: dados.content
    });
}
criaPost({ owner: 'alysson.silva', content: 'Segundo tweet' }); 
criaPost({ owner: 'alysson.silva', content: 'Terceiro tweet' }); 
// console.log(miniTwitter.posts)

// READ
function pegaPosts() {
    return miniTwitter.posts;
}
console.log(pegaPosts())

// UPDATE
function atualizaContentDoPost(id, novoConteudo) {
    const postQueVaiSerAtualizado = pegaPosts().find((post) => {
        return post.id === id;
    });
    console.log(postQueVaiSerAtualizado)
    postQueVaiSerAtualizado.content = novoConteudo
}
atualizaContentDoPost(1, 'Novo conteúdo do post')
console.log(pegaPosts())

// DELETE
function apagaPost(id) {
    const listaDePostsAtualizada = pegaPosts().filter((postAtual) => {
        return postAtual.id !== id;
    })
    miniTwitter.posts = listaDePostsAtualizada;
}
apagaPost(1);
apagaPost(2);
apagaPost(3);
console.log(pegaPosts());