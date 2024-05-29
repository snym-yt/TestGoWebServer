// Function to convert JSON AST to XML
function makeXML(ast) {
    let xml = '';
    xml += '<xml xmlns="http://www.w3.org/1999/xhtml">';
    xml += traverseAST(ast);
    xml += '</xml>';
    return xml;
}

// Function to traverse the AST and generate XML
function traverseAST(node) {
    let xml = '';
    // Handle different types of nodes in your AST
    if (node.Token && node.Token.Token.type === "LOOP") {
        xml += '<block type="controls_repeat_ext" id="T,:lx`qH6`%re*cN8lOx" x="-5" y="23">';
        xml += '<value name="TIMES">';
        xml += `<shadow type="math_number" id="GamoPT;mPC@7[FE#B4W!"><field name="NUM">${node.Expression.Condition.Value}</field></shadow>`;
        xml += '</value>';
        xml += '<statement name="DO">';
        xml += traverseStatements(node.Expression.Consequence.Statements);
        xml += '</statement>';
        xml += '</block>';
    }
    // Add handling for other types of nodes as needed
    return xml;
}

// Function to traverse statements inside a block
function traverseStatements(statements) {
    let xml = '';
    statements.forEach(statement => {
        if (statement.Token && statement.Token.Token.type === 'IDENT') {
            xml += `<block type="${statement.Token.Token.literal}" id="${generateUniqueId(24)}" x="-5" y="23">`;
            xml += '<field name="Note No.">';
            xml += statement.Expression.Arguments[0].Value;
            xml += '</field>';
            xml += '<field name="during">';
            xml += statement.Expression.Arguments[1].Value;
            xml += '</field>';
            xml += '</block>';
        }
        // Add handling for other types of statements as needed
    });
    return xml;
}
