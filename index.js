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
    del = (data, _node) => {
        // 3 cases - no subords, 1 subord, 2 subord ()
        go = data < _node.data ? 'left' : 'right'
        if (_node[go].data === data) {
            //  && _node[go].left === null && _node[go].right === null
            // _node = _node[go]
            console.log(['(_node[go].data === data)',_node[go].data, data])
            if (_node[go].left == null && _node[go].right == null) {
                // eol -> del 
                _node[go] = null
            } else if (_node[go].left !== null && _node[go].right !== null) { // two subords
                // look on go side for next highest or lowest, del 
                // and replace current node with next
                let go_opp = go == 'left' ? 'right' : 'left'
                console.log(['_node[go].data',_node[go].data, data, 'go', go, 'opp', go_opp])
                let _parent = _node[go]
                let _next = _parent[go_opp]
                while (_next[go] !== null) {
                    console.log(['opp', _next[go].data])
                    _next = _next[go]
                } 
                _target = _next.data
                _parent.data = _target
                console.log(['target', _target, 'nxt data', _next.data, 'nxt go', _next[go], 'nxt opp', _next[go_opp]])
                if (_parent[go_opp][go]) {

                    // correct for all configs it seems 
                    // except where data == _root  ok: _parent[go_opp][go] = null 
                    _parent[go_opp][go] = null
                } else {
                    _parent[go_opp] = null
                }
            } else if (_node[go].left !== null || _node[go].right !== null) {
                // has one child
                grandchild(go, _node)

            } else {
                console.log('missed criteria')
            }
        } else {
            console.log(['recurse', _node[go].data, data])
            del(data, _node[go])
        }
    }
                // grandchild(go, _node)
                // if (_node[go].left !== null) {
                //     _node[go] = _node[go].left
                // } else {
                //     _node[go] = _node[go].right
                // }
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
      }
  
    ins = (data, _node) => {
        go = data < _node.data ? 'left' : 'right'
        // subnode = _node[go] === null ? false : true

        if (!_node[go]) {
            // insert node here and link subnode
            _node[go] = node(data)
        } else {            
            // keep going there
            console.log([go, subnode, _node.data])
            console.log([_node.left ? _node.left.data : null, data, _node.right ? _node.right.data : null])
            ins(data, _node[go])
        }
    }
    grandchild = (go, _node) => {
        if (_node[go].left !== null) {
            _node[go] = _node[go].left
        } else {
            _node[go] = _node[go].right
        }
    }
    _root = build(_list, _start, _end)


    return { _list, _root, build, ins, del, prettyPrint }
}





/*

data = 7 
go = 'right'
go_opp = go == 'left' ? 'right' : 'left'
_node = bst._root

_next = _node[go]
while (_next[go_opp] !== null) {
    _next = _next[go_opp]
}
_target = _next.data



_n = bst._root.right.left
data = 18
        go = data < _n.data ? 'left' : 'right'
        subnode = _n[go] === null ? false : true


bst = srchTree(array)
bst.ins(18, bst._root)
bst.prettyPrint(bst._root)


bst = srchTree(array)
bst.del(67, bst._root)
bst.prettyPrint(bst._root)

ins when    'left'      data > _node.left.data 
            'right'     data > _node.right.data && data  

array = Array.from(new Set([1, 7, 4, 23, 9, 4, 3, 5, 7, 9, 67, 6345, 324])).sort((a, b) => a - b)
bst = srchTree(array)
bst._root
bst.prettyPrint(bst._root)

> bst.prettyPrint(bst._root)
│           ┌── 6345
│       ┌── 324
│   ┌── 67
│   │   │   ┌── 23
│   │   └── 9
└── 7
    │       ┌── 5
    │   ┌── 4
    └── 3
        └── 1

bst = srchTree(array)
bst.del(67, bst._root)
bst.prettyPrint(bst._root)


bst = srchTree(array)
bst.del(12, bst._root)
bst.prettyPrint(bst._root)


array = Array.from(new Set([1, 2, 8, 6, 10,15, 11,12,13,14, 7, 4,  9, 4, 3, 5, 7, 9])).sort((a, b) => a - b)
bst = srchTree(array)
bst._root
bst.prettyPrint(bst._root)


n = node('root')
n.right = bst._root
bst.del(8, n)
bst.prettyPrint(n)

bst.del(8, bst._root)
bst.prettyPrint(bst._root)

bst.del(12, bst._root)
bst.prettyPrint(bst._root)

bst.del(4, bst._root)
bst.prettyPrint(bst._root)




bst.del(10, bst._root)
bst.prettyPrint(bst._root)

bst.del(11, bst._root)
bst.prettyPrint(bst._root)


/// xxx  bst.del(8, bst._root)
///      bst.prettyPrint(bst._root)

bst.del(10, bst._root)
bst.prettyPrint(bst._root)


array = Array.from(new Set([1, 7, 4, 8])).sort((a, b) => a - b)


_root = build(array, 0, array.length - 1)


    start = 0
    end = array.length
    mid = parseInt((start + end) / 2)
    root = node(array[mid])
    
    root.left = node(array[parseInt((0 + mid-1)/2)])






















            // insert node here and link subnode
            // let n = node(data)
            // console.log([go, subnode, _node])
            // n[go] = _node[go]
            // _node[go] = n
        // } else if (!subnode) {
        //     // insert node here, no further nodes in branch
        //     _node[go] = node(data)
        // } else {
        //     ins(data, _node[go])



*/



