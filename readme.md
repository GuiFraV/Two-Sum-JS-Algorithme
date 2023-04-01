## Two Sum Algo using js

1. Création d'un objet hashMap vide. Il servira à stocker les éléments du tableau nums en tant que clé, et l'indice en tant que valeurs.

2. La première boucle for parcourt le tableau nums. Pour chaque élément, il ajoute une nouvelle entrée dans hashMap avec la valeur de l'élément comme clé et son indice comme valeur.

3. La seconde boucle for parcourt à nouveau le tableau nums. Pour chaque élément, elle calcule la valeur complement nécessaire pour atteindre la somme target. Par exemple, si target est 10 et l'élément actuel est 3, le complement serait 7.

4. Ensuite, la fonction vérifie si le complement existe dans hashMap (en utilisant la méthode hasOwnProperty). Si c'est le cas, elle s'assure également que l'indice du complement trouvé est différent de l'indice de l'élément actuel (pour éviter d'utiliser le même élément deux fois).

5. Si un complement valide est trouvé, la fonction renvoie un tableau contenant l'indice du complement (récupéré à partir de hashMap) et l'indice de l'élément actuel (j).

6. Si aucune paire d'éléments valides n'est trouvée après avoir parcouru tout le tableau nums, la fonction renvoie null.