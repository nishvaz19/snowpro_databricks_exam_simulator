/**
 * verify-bank.js
 * Run this in your terminal: node verify-bank.js
 */

// Import your question bank (adjust path as needed)
const { questionBank } = require('./questionBank_typescript_nestjs.js');

function verifyQuestionBank(bank) {
    const idMap = new Map();
    const duplicates = [];

    bank.forEach((item, index) => {
        if (idMap.has(item.id)) {
            duplicates.push({
                duplicateId: item.id,
                firstOccurrence: idMap.get(item.id),
                secondOccurrence: {
                    index: index,
                    category: item.category,
                    question: item.question.substring(0, 50) + "..."
                }
            });
        } else {
            idMap.set(item.id, {
                index: index,
                category: item.category,
                question: item.question.substring(0, 50) + "..."
            });
        }
    });

    if (duplicates.length === 0) {
        console.log("✅ Success: No duplicate IDs found. Total questions:", bank.length);
    } else {
        console.error(`❌ Found ${duplicates.length} duplicate IDs:`);
        duplicates.forEach(dup => {
            console.log(`\nID [${dup.duplicateId}] is duplicated:`);
            console.log(`  1st: Index ${dup.firstOccurrence.index} | Category: ${dup.firstOccurrence.category} | Q: ${dup.firstOccurrence.question}`);
            console.log(`  2nd: Index ${dup.secondOccurrence.index} | Category: ${dup.secondOccurrence.category} | Q: ${dup.secondOccurrence.question}`);
        });
    }
}

verifyQuestionBank(questionBank);
