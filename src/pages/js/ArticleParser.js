
export default class ArticleParser {
    constructor(configs) {
        this.contents = null;
        this.githubToken = configs.githubToken || null;
        this.renderedOutput = [];
        this.blockMaps =
            {
                paragraph: {
                    name: 'paragraph',
                    contentLocation: 'text',
                    render: (content) => {
                        return `<div class="mb-4 font-crimson dark:text-gray-400 text-gray-700 text-xl leading-8 font-normal paragraph">${content.text}</div>`;
                    }
                },
                code: {
                    name: 'code',
                    contentLocation: 'code',
                    render: (content) => {
                        return `<div class="-mx-8 border-none md:mx-0 relative bg-gray-100 min-h-200 dark:text-gray-400 dark:bg-gray-900 font-inconsolata text-#41314e leading-6 text-sm md:border border-#f1f1f4 overflow-x-auto resize-y whitespace-pre p-4">${content.code}</div>`;
                    }
                },
                header: {
                    name: 'header',
                    contentLocation: 'text',
                    extraAttributes: ['level'],
                    render: (content) => {
                        return `<div class="py-3 px-0 mt-0 leading-5 outline-none">${content.text}</div>`;
                    }
                },
                binaryImage: {
                    name: 'binaryImage',
                    contentLocation: 'data',
                    extraAttributes: [],
                    render: (content) => {
                        return `<div class="py-3 px-0 mt-0 leading-5 outline-none">
                                    <img src="${content.url}" alt=""></div>`;
                    }
                },
                nested: {
                    name: 'list',
                    contentLocation: 'items',
                    extraAttributes: [],
                    render: (content) => {
                        function generateNestedListHTML(item) {
                            const htmlArray = [];
                            htmlArray.push(`<li class="p-2">${item.content}`);

                            if (item.items.length > 0) {
                                htmlArray.push('<ul class=\'list-disc ml-4\'>');
                                item.items.forEach(subItem => {
                                    htmlArray.push(generateNestedListHTML(subItem));
                                });
                                htmlArray.push('</ul>');
                            }

                            htmlArray.push('</li>');
                            return htmlArray.join('');
                        }

                        return '<ul class="list-disc">' + generateNestedListHTML(content.items[0]) + '</ul>';
                    }
                }
            }
    }

    parse(contents) {
        try {
            this.contents = contents;
            /**
             * Iterate over the block contents
             */
            for (const block of this.contents.blocks) {
                if (typeof this.blockMaps[block.type] !== 'undefined') {
                    this.renderedOutput.push(this.blockMaps[block.type].render(block.data));
                }
            }
            return this.renderedOutput.join('');
        } catch (e) {
            console.log('Failed to parse contents: ', e);
            return '';
        }
    }
}