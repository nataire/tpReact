<img src="images/readme/header-small.jpg" >

# G. Destructuring <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [Principe du destructuring](#principe-du-destructuring)
- [Destructuring et fonctions](#destructuring-et-fonctions)
- [Mise en application](#mise-en-application)


### Principe du destructuring
Comme vu en cours, une des fonctionnalités ES6+ les plus pratiquées s'appelle le "destructuring".

Le destructuring permet de facilement déclarer des variables dont les valeurs vont être remplies automatiquement par des propriétés d'objets. Prenons par exemple l'objet 'hodor' ci-dessous :

```js
const hodor = {
	firstname: 'hodor',
	lastname: 'hodor'
};
```

Si l'on veut récupérer son nom et son prénom, sans le destructuring, on ferait ceci :
```js
const firstname = hodor.firstname,
	lastname = hodor.lastname;
```

Le destructuring va permettre de faire la même chose mais en plus rapide :
```js
const { firstname, lastname } = hodor;
```

Notez les deux accolades autour du nom des constantes. <br>Les constantes doivent aussi avoir le même nom que les propriétés de l'objet (même si un [système d'alias existe](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Affecter_par_d%C3%A9composition#Affecter_avec_un_nom_diff%C3%A9rent)).

Le résultat, lui, est le même que dans l'exemple précédent : on crée deux constantes, dont les valeurs sont celles des propriétés de l'objet hodor.

**Notez bien que cela fonctionne pour les `const` mais bien entendu aussi pour les `let` !**

### Destructuring et fonctions
Le destructuring est souvent utilisé dans la déclaration de fonctions qui reçoivent des objets en paramètre. Par exemple, imaginons la fonction suivante :

```js
function kill(character) {
	console.log( `${character.firstname} ${character.lastname} is dead :'(` );
}
```

Le destructuring permet de simplifier l'écriture de la fonction :
```js
function kill({firstname, lastname}) {
	console.log( `${firstname} ${lastname} is dead :'(` );
}
```

Dans cette nouvelle version, le code est beaucoup moins verbeux, et surtout la fonction est maintenant quasiment **auto-documentée** : rien qu'en lisant la signature de la fonction, on sait que le paramètre qu'on doit lui passer est un objet (grâce aux accolades) et aussi qu'il doit avoir deux propriétés, firstname et lastname. Pratique !

### Mise en application
Appliquez le destructuring partout où c'est possible dans votre code !