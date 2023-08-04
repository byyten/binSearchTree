/*
binary search tree

*/


node = (data = null, left=null, right=null) => {
    return { data, left, right }
}

srchTree = (list) => {
    _list = Array.from(new Set(list)).sort((a, b) => a - b) // sorted, unique instanceof Array
    _start = 0
    _end = _list.length - 1
    _root = build(_list, _start, _end)
    build = (array, start, end) => {
        if (start > end) { return null }
        let mid = parseInt((start + end) / 2)
        let root = node(array[mid])
        console.log([start, mid, end, root])
        root.left = build(array, start, mid - 1)
        root.right = build(array, mid + 1, end)
        console.log([start, mid, end, root])
        return root
    }
    prettyPrint = (node, prefix = "", isLeft = true) => {
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
          prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
      };
  
      return { _list, _root, build, prettyPrint }
}





/*




array = Array.from(new Set([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])).sort((a, b) => a - b)
bst = srchTree(array)
bst._root
bst.prettyPrint(bst._root)





array = Array.from(new Set([1, 7, 4, 8])).sort((a, b) => a - b)


_root = build(array, 0, array.length - 1)


    start = 0
    end = array.length
    mid = parseInt((start + end) / 2)
    root = node(array[mid])
    
    root.left = node(array[parseInt((0 + mid-1)/2)])


*/