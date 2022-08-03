window.__EC_DOC_option_dataset = {"id":{"desc":"<p>Component ID, not specified by default. If specified, it can be used to refer the component in option or API.</p>\n"},"source":{"desc":"<p>Source data. Generally speaking, a source data describe a table, where these format below can be applied:</p>\n<p>2d array, where <a href=\"#dataset.dimensions\">dimension names</a> can be provided in the first row/column, or do not provide, only data.</p>\n<pre><code class=\"lang-ts\">[\n    [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n    [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n    [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n    [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n]\n</code></pre>\n<p>Row based key-value format (object array), where the keys indicate <a href=\"#dataset.dimensions\">dimension names</a>.</p>\n<pre><code class=\"lang-ts\">[\n    {product: &#39;Matcha Latte&#39;, count: 823, score: 95.8},\n    {product: &#39;Milk Tea&#39;, count: 235, score: 81.4},\n    {product: &#39;Cheese Cocoa&#39;, count: 1042, score: 91.2},\n    {product: &#39;Walnut Brownie&#39;, count: 988, score: 76.9}\n]\n</code></pre>\n<p>Column based key-value format, where each value represents a column of a table.</p>\n<pre><code class=\"lang-ts\">{\n    &#39;product&#39;: [&#39;Matcha Latte&#39;, &#39;Milk Tea&#39;, &#39;Cheese Cocoa&#39;, &#39;Walnut Brownie&#39;],\n    &#39;count&#39;: [823, 235, 1042, 988],\n    &#39;score&#39;: [95.8, 81.4, 91.2, 76.9]\n}\n</code></pre>\n<p>More details about <code class=\"codespan\">dataset</code> can be checked in the <a href=\"https://echarts.apache.org/handbook/en/concepts/dataset/\" target=\"_blank\">tutorial</a>.</p>\n"},"dimensions":{"desc":"<p><code class=\"codespan\">dimensions</code> can be used to define dimension info for <code class=\"codespan\">series.data</code> or <code class=\"codespan\">dataset.source</code>.</p>\n<p>Notice: if <a href=\"#dataset\">dataset</a> is used, we can definite dimensions in <a href=\"#dataset.dimensions\">dataset.dimensions</a>, or provide dimension names in the first column/row of <a href=\"#dataset.source\">dataset.source</a>, and not need to specify <code class=\"codespan\">dimensions</code> here. But if <code class=\"codespan\">dimensions</code> is specified here, it will be used despite the dimension definitions in dataset.</p>\n<p>For example:</p>\n<pre><code class=\"lang-ts\">option = {\n    dataset: {\n        source: [\n            // &#39;date&#39;, &#39;open&#39;, &#39;close&#39;, &#39;highest&#39;, &#39;lowest&#39;\n            [12, 44, 55, 66, 2],\n            [23, 6, 16, 23, 1],\n            ...\n        ]\n    },\n    series: {\n        type: &#39;xxx&#39;,\n        // Specify name for each dimesions, which will be displayed in tooltip.\n        dimensions: [&#39;date&#39;, &#39;open&#39;, &#39;close&#39;, &#39;highest&#39;, &#39;lowest&#39;]\n    }\n}\n</code></pre>\n<pre><code class=\"lang-ts\">series: {\n    type: &#39;xxx&#39;,\n    dimensions: [\n        null,                // If you do not intent to defined this dimension, use null is fine.\n        {type: &#39;ordinal&#39;},   // Specify type of this dimension.\n                             // &#39;ordinal&#39; is always used in string.\n                             // If type is not specified, echarts will guess type by data.\n        {name: &#39;good&#39;, type: &#39;number&#39;},\n        &#39;bad&#39;                // Equals to {name: &#39;bad&#39;}.\n    ]\n}\n</code></pre>\n<p>Each data item of <code class=\"codespan\">dimensions</code> can be:</p>\n<ul>\n<li><code class=\"codespan\">string</code>, for example, <code class=\"codespan\">&#39;someName&#39;</code>, which equals to <code class=\"codespan\">{name: &#39;someName&#39;}</code>.</li>\n<li><code class=\"codespan\">Object</code>, where the attributes can be:<ul>\n<li>name: <code class=\"codespan\">string</code>.</li>\n<li>type: <code class=\"codespan\">string</code>, supports:<ul>\n<li><code class=\"codespan\">number</code></li>\n<li><code class=\"codespan\">float</code>, that is, <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array\" target=\"_blank\">Float64Array</a></li>\n<li><code class=\"codespan\">int</code>, that is, <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array\" target=\"_blank\">Int32Array</a></li>\n<li><code class=\"codespan\">ordinal</code>, discrete value, which represents string generally.</li>\n<li><code class=\"codespan\">time</code>, time value, see <a href=\"#series.data\">data</a> to check the format of time value.</li>\n</ul>\n</li>\n<li>displayName: <code class=\"codespan\">string</code>, generally used in tooltip for dimension display. If not specified, use <code class=\"codespan\">name</code> by default.</li>\n</ul>\n</li>\n</ul>\n<p>When <code class=\"codespan\">dimensions</code> is specified, the default <code class=\"codespan\">tooltip</code> will be displayed vertically, which is better to show diemsion names. Otherwise, <code class=\"codespan\">tooltip</code> will displayed only value horizontally.</p>\n"},"sourceHeader":{"desc":"<p>Whether the first row/column of <code class=\"codespan\">dataset.source</code> represents <a href=\"#dataset.dimensions\">dimension names</a>. Optional values:</p>\n<ul>\n<li><code class=\"codespan\">null/undefined/&#39;auto&#39;</code>: means auto detect whether the first row/column is dimension names or data.</li>\n<li><code class=\"codespan\">true</code>: the first row/column is dimension names.</li>\n<li><code class=\"codespan\">false</code>: data start from the first row/column.</li>\n<li><code class=\"codespan\">number</code>: means the row/column count of the dimension names, that is, the start index of data row/column. e.g. <code class=\"codespan\">sourceHeader: 2</code> means the front two rows/columns are dimension names, the back ones are data.</li>\n</ul>\n<p>Note: <strong><em>the first row/column</em></strong> means that if <a href=\"#series.seriesLayoutBy\">series.seriesLayoutBy</a> is set as <code class=\"codespan\">&#39;column&#39;</code>, pick the first row, otherwise, if it is set as <code class=\"codespan\">&#39;row&#39;</code>, pick the first column.</p>\n"},"transform":{"desc":"<p>See the tutorial of <a href=\"tutorial.html#Data%20Transform\" target=\"_blank\">data transform</a>.</p>\n"},"transform-filter.config":{"desc":"<p>The condition of transform &quot;filter&quot;.</p>\n<p>See the tutorial of <a href=\"tutorial.html#Data%20Transform\" target=\"_blank\">data transform</a>.</p>\n"},"transform-filter.print":{"desc":"<p>When using data transform, we might run into the trouble that the final chart do not display correctly but we do not know where the config is wrong. There is a property <code class=\"codespan\">transform.print</code> might help in such case. (<code class=\"codespan\">transform.print</code> is only available in dev environment).</p>\n<pre><code class=\"lang-ts\">option = {\n    dataset: [{\n        source: [ ... ]\n    }, {\n        transform: {\n            type: &#39;filter&#39;,\n            config: { ... }\n            // The result of this transform will be printed\n            // in dev tool via `console.log`.\n            print: true\n        }\n    }],\n    ...\n}\n</code></pre>\n"},"transform-sort.config":{"desc":"<p>The condition of transform &quot;sort&quot;.</p>\n<p>See the tutorial of <a href=\"tutorial.html#Data%20Transform\" target=\"_blank\">data transform</a>.</p>\n"},"transform-sort.print":{"desc":"<p>When using data transform, we might run into the trouble that the final chart do not display correctly but we do not know where the config is wrong. There is a property <code class=\"codespan\">transform.print</code> might help in such case. (<code class=\"codespan\">transform.print</code> is only available in dev environment).</p>\n<pre><code class=\"lang-ts\">option = {\n    dataset: [{\n        source: [ ... ]\n    }, {\n        transform: {\n            type: &#39;filter&#39;,\n            config: { ... }\n            // The result of this transform will be printed\n            // in dev tool via `console.log`.\n            print: true\n        }\n    }],\n    ...\n}\n</code></pre>\n"},"transform-xxx:xxx":{"desc":"<p>Besides built-in transforms (like &#39;filter&#39;, &#39;sort&#39;), we can also use external transforms to provide more powerful functionalities.</p>\n<p>See the tutorial of <a href=\"tutorial.html#Data%20Transform\" target=\"_blank\">data transform</a>.</p>\n"},"transform-xxx:xxx.type":{"desc":"<p>Built-in transform has no namespace (like <code class=\"codespan\">type: &#39;filter&#39;</code>, <code class=\"codespan\">type: &#39;sort&#39;</code>).</p>\n<p>External transform has namespace (like <code class=\"codespan\">type: &#39;ecStat:regression&#39;</code>).</p>\n"},"transform-xxx:xxx.config":{"desc":"<p>The needed parameters of this data transform. Each type of transform has its own definition of <code class=\"codespan\">config</code>.</p>\n"},"transform-xxx:xxx.print":{"desc":"<p>When using data transform, we might run into the trouble that the final chart do not display correctly but we do not know where the config is wrong. There is a property <code class=\"codespan\">transform.print</code> might help in such case. (<code class=\"codespan\">transform.print</code> is only available in dev environment).</p>\n<pre><code class=\"lang-ts\">option = {\n    dataset: [{\n        source: [ ... ]\n    }, {\n        transform: {\n            type: &#39;filter&#39;,\n            config: { ... }\n            // The result of this transform will be printed\n            // in dev tool via `console.log`.\n            print: true\n        }\n    }],\n    ...\n}\n</code></pre>\n"},"fromDatasetIndex":{"desc":"<p>Specify the input dataset for <a href=\"#dataset.transform\">dataset.transform</a>.\nIf <a href=\"#dataset.transform\">dataset.transform</a> specified but both <code class=\"codespan\">fromDatasetIndex</code> and <code class=\"codespan\">fromDatasetId</code> are not specified, <code class=\"codespan\">fromDatasetIndex: 0</code> will be used by default.</p>\n<p>See the tutorial of <a href=\"tutorial.html#Data%20Transform\" target=\"_blank\">data transform</a>.</p>\n"},"fromDatasetId":{"desc":"<p>Specify the input dataset for <a href=\"#dataset.transform\">dataset.transform</a>.</p>\n<p>See the tutorial of <a href=\"tutorial.html#Data%20Transform\" target=\"_blank\">data transform</a>.</p>\n"},"fromTransformResult":{"desc":"<p>If a <a href=\"#dataset.transform\">dataset.transform</a> produces more than one result, we can use <code class=\"codespan\">fromTransformResult</code> to retrieve some certain result.</p>\n<p>In most cases, <code class=\"codespan\">fromTransformResult</code> do not need to be specified because most transforms only produce one result. If <code class=\"codespan\">fromTransformResult</code> is not specified, we use <code class=\"codespan\">fromTransformResult: 0</code> by default.</p>\n<p>See the tutorial of <a href=\"tutorial.html#Data%20Transform\" target=\"_blank\">data transform</a>.</p>\n"}}