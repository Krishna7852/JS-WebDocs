
    function Node(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
        this.show = show;
    }
    function show() {
        return this.data;
    }

    function BST() {
        this.root = null;
        this.insert = insert;
        this.inOrder = inOrder;
        this.preOrder = preOrder;
        this.postOrder = postOrder;
        this.getMin = getMin;
        this.getMax = getMax;
        // this.find = find;
        this.remove = remove;
        this.removeNode = removeNode;
    }
    function insert(data) {
        var n= new Node(data, null, null);
        if (this.root == null){
            this.root = n;
        } else {
            var current = this.root;
            var parent;
            while (true){
                parent = current;
                if (data < current.data) {
                    current = current.left;
                    if (current == null){
                        parent.left = n;
                        break;
                    }
                } else {
                    current = current.right;
                    if (current == null){
                        parent.right = n;
                        break;
                    }
                }
            }
        }
    }
    function inOrder(node) {
        if (!(node == null)) {
            inOrder(node.left);
            document.write(node.show() + " ");
            inOrder(node.right);
        }
    }
    function preOrder(node) {
        if (!(node == null)) {
            document.write(node.show() + " ");
            preOrder(node.left);
            preOrder(node.right);
        }
    }

    function postOrder(node) {
        if (!(node == null)) {
            postOrder(node.left);
            postOrder(node.right);
      document.write(node.show() + " ");
        }
    }

    function getMin() {
        var current = this.root;
        while (!(current.left == null)) {
            current = current.left;
        }
        return current.data;
    }
    function getMax() {
        var current = this.root;
        while (!(current.right == null)) {
            current = current.right;
        }
        return current.data;
    }

    function find(data) {
        var current = this.root;
        while (current.data != data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current == null){
                return null;
            }
        }
        return current;
    }
    function remove(data) {
        root = removeNode(this.root, data);
    }
    function removeNode(node, data) {
        if (node == null){
            return null;
        }
        if (data == node.data) {
            // node has no children
            if (node.left == null && node.right == null){
                return null;
            }
            // node has no left child
            if (node.left == null){
                return node.right;
            }
            // node has no right child
            if (node.right == null){
                return node.left;
            }
            // node has two children
            var tempNode = getSmallest(node.right);
            node.data = tempNode.data;
            node.right = removeNode(node.right, tempNode.data);
            return node;
        } else if (data < node.data) {
            node.left = removeNode(node.left, data);
            return node;
        } else {
            node.right = removeNode(node.right, data);
            return node;
        }
    }
    var nums = new BST();
    nums.insert(23);
    nums.insert(45);
    nums.insert(16);
    nums.insert(37);
    nums.insert(3);
    nums.insert(99);
    nums.insert(22);

    // searching by Inorder traversal(LNR)
  document.write("Inorder traversal: ");
    inOrder(nums.root);
 // searching by pre-order traversal(NLR)
    document.write("<br>"+"pre-order traversal: ");
      preOrder(nums.root);
// searching by pOST-order traversal(LRN)
document.write("<br>"+"post-order traversal: ");
  postOrder(nums.root);

    var min = nums.getMin();

    document.write("<br>"+"The minimum value of the BST is : " + min );
    document.write("<br>");
    var max = nums.getMax();
    document.write("The maximum value of the BST is : " + max+"<br>");


    // inOrder(nums.root);
    // document.write("<br>");
    // var value = 99;
    // var found = nums.find(value);
    // if (found != null){
        // document.write("Found " + value + " in the BST.");
    // } else {
      // document.write(value + " was not found in the BST.");
    // }
