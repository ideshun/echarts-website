window.__EC_DOC_option_gl_series_scatter3D = {
  "name": {
    "desc": "<p>Series name used for displaying in <a href=\"/zh/option.html#tooltip\" target=\"_blank\">tooltip</a> and filtering with <a href=\"/zh/option.html#legend\" target=\"_blank\">legend</a>, or updating data and configuration with <code class=\"codespan\">setOption</code>.</p>\n"
  },
  "coordinateSystem": {
    "desc": "<p>The coordinate used in the series, whose options are:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;cartesian3D&#39;</code></p>\n<p>  Use a 3D rectangular coordinate (also known as Cartesian coordinate), with <a href=\"#series-.xAxisIndex\">xAxisIndex</a> and <a href=\"#series-.yAxisIndex\">yAxisIndex</a> to assign the corresponding axis component.</p>\n</li>\n</ul>\n<ul>\n<li><code class=\"codespan\">&#39;geo3D&#39;</code>\n  Use 3D geographic coordinate, with <a href=\"#series-.geoIndex\">geoIndex</a> to assign the corresponding 3D geographic coordinate components.</li>\n</ul>\n<ul>\n<li><p><code class=\"codespan\">&#39;globe&#39;</code></p>\n<p>  Use 3D globe coordinate, with <a href=\"#series-.globeIndex\">globeIndex</a> to assign the corresponding 3D globe coordinate components.</p>\n</li>\n</ul>\n"
  },
  "grid3DIndex": {
    "desc": "<p>Use the index of the <a href=\"#grid3D\">grid3D</a> component. The first <a href=\"#grid3D\">grid3D</a> component is used by default.</p>\n"
  },
  "geo3DIndex": {
    "desc": "<p>The index of the <a href=\"#geo3D\">geo3D</a> component used by the axis.The first <a href=\"#grid3D\">grid3D</a> component is used by default.</p>\n"
  },
  "globeIndex": {
    "desc": "<p>The index of the <a href=\"#globe\">globe</a> component used by the axis.The first <a href=\"#globe\">globe</a> component is used by default.</p>\n"
  },
  "symbol": {
    "desc": "<p>The shape of the scatter. The default is a circle.</p>\n<p>Icon types provided by ECharts includes \n<code class=\"codespan\">&#39;circle&#39;</code>, <code class=\"codespan\">&#39;rect&#39;</code>, <code class=\"codespan\">&#39;roundRect&#39;</code>, <code class=\"codespan\">&#39;triangle&#39;</code>, <code class=\"codespan\">&#39;diamond&#39;</code>, <code class=\"codespan\">&#39;pin&#39;</code>, <code class=\"codespan\">&#39;arrow&#39;</code>, <code class=\"codespan\">&#39;none&#39;</code></p>\n<p>Icons can be set to arbitrary vector path via <code class=\"codespan\">&#39;path://&#39;</code> in ECharts. As compared with a raster image, vector paths prevent jagging and blurring when scaled, and have better control over changing colors. The size of the vector icon will be adapted automatically. Refer to <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a> for more information about the format of the path. You may export vector paths from tools like Adobe </p>\n"
  },
  "symbolSize": {
    "desc": "<p> symbol size. It can be set to single numbers like <code class=\"codespan\">10</code>, or use an array to represent width and height. For example, <code class=\"codespan\">[20, 10]</code> means symbol width is <code class=\"codespan\">20</code>, and height is<code class=\"codespan\">10</code>.</p>\n<p>If size of symbols needs to be different, you can set with callback function in the following format:</p>\n<pre><code class=\"lang-js\">(value: Array|number, params: Object) =&gt; number|Array\n</code></pre>\n<p>The first parameter <code class=\"codespan\">value</code> is the value in <a href=\"#series-.data\">data</a>, and the second parameter <code class=\"codespan\">params</code> is the rest parameters of data item.</p>\n"
  },
  "itemStyle": {
    "desc": "<p>Sets the style of scatter such as colors, strokes, etc.</p>\n"
  },
  "itemStyle.color": {
    "desc": "<p>The color of the graphic. </p>\n<pre><code class=\"lang-js\">// pure white\n[1, 1, 1, 1]\n</code></pre>\n<p>When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.</p>\n"
  },
  "itemStyle.opacity": {
    "desc": "<p>The opacity of the graphic.</p>\n"
  },
  "itemStyle.borderWidth": {
    "desc": "<p>Sets the width of the border.</p>\n"
  },
  "itemStyle.borderColor": {
    "desc": "<p>Sets the color of the border.</p>\n"
  },
  "label": {
    "desc": "<p>Sets the style of label.</p>\n"
  },
  "label.show": {
    "desc": "<p>Whether to show the label.</p>\n"
  },
  "label.distance": {
    "desc": "<p>Distance to the host graphic element.</p>\n<p>The distance from the label to the graphic. In a 3D Scatter, this distance is the pixel value of the screen space. In other figures, this distance is the relative 3D distance.</p>\n"
  },
  "label.position": {
    "desc": "<p>The location of the label.</p>\n<p><strong>Optional:</strong></p>\n<ul>\n<li>&#39;top&#39;</li>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;bottom&#39;</li>\n</ul>\n"
  },
  "label.formatter": {
    "desc": "<p>The formatter of the label content, which supports the string template and the callback function. In either form, <code class=\"codespan\">\\n</code> is supported to represent a new line.</p>\n<p><strong>String template:</strong> </p>\n<p>The model variation includes:</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>: series name.</li>\n<li><code class=\"codespan\">{b}</code>: the name of a data item.</li>\n<li><code class=\"codespan\">{c}</code>: the value of a data item.</li>\n</ul>\n<p><strong>Example:</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {c}&#39;\n</code></pre>\n<p><strong>Callback function:</strong>\n Callback function is in form of:</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>The <code class=\"codespan\">params</code> is the single data set needed by formatter, which is formed as:</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // Series type\n    seriesType: string,\n    // Series index in option.series\n    seriesIndex: number,\n    // Series name\n    seriesName: string,\n    // Data name, or category name\n    name: string,\n    // Data index in input data array\n    dataIndex: number,\n    // Original data as input\n    data: Object,\n    // Value of data. In most series it is the same as data.\n    // But in some series it is some part of the data (e.g., in map, radar)\n    value: number|Array|Object,\n    // encoding info of coordinate system\n    // Key: coord, like (&#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39;)\n    // value: Must be an array, not null/undefined. Contain dimension indices, like:\n    // {\n    //     x: [2] // values on dimension index 2 are mapped to x axis.\n    //     y: [0] // values on dimension index 0 are mapped to y axis.\n    // }\n    encode: Object,\n    // dimension names list\n    dimensionNames: Array&lt;String&gt;,\n    // data dimension index, for example 0 or 1 or 2 ...\n    // Only work in `radar` series.\n    dimensionIndex: number,\n    // Color of data\n    color: string,\n\n}\n</code></pre>\n<p>Note: the usage of encode and dimensionNames can be:</p>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "label.textStyle": {
    "desc": "<p>The font style of the label.</p>\n"
  },
  "label.textStyle.color": {
    "desc": "<p>The Color of the text.</p>\n"
  },
  "label.textStyle.borderWidth": {
    "desc": "<p>The border width of the text.</p>\n"
  },
  "label.textStyle.borderColor": {
    "desc": "<p>The border color of the text.</p>\n"
  },
  "label.textStyle.fontFamily": {
    "desc": "<p>The font family of the text.</p>\n"
  },
  "label.textStyle.fontSize": {
    "desc": "<p>The font size of the text.</p>\n"
  },
  "label.textStyle.fontWeight": {
    "desc": "<p>The font thick weight of the text.</p>\n<p><strong>Optional:</strong></p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
  },
  "emphasis": {
    "desc": "<p>Graphics and labels are highlighted.</p>\n"
  },
  "emphasis.itemStyle.color": {
    "desc": "<p>The color of the graphic. </p>\n<pre><code class=\"lang-js\">// pure white\n[1, 1, 1, 1]\n</code></pre>\n<p>When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.</p>\n"
  },
  "emphasis.itemStyle.opacity": {
    "desc": "<p>The opacity of the graphic.</p>\n"
  },
  "emphasis.itemStyle.borderWidth": {
    "desc": "<p>Sets the width of the border.</p>\n"
  },
  "emphasis.itemStyle.borderColor": {
    "desc": "<p>Sets the color of the border.</p>\n"
  },
  "emphasis.label.show": {
    "desc": "<p>Whether to show the label.</p>\n"
  },
  "emphasis.label.distance": {
    "desc": "<p>Distance to the host graphic element.</p>\n<p>The distance from the label to the graphic. In a 3D Scatter, this distance is the pixel value of the screen space. In other figures, this distance is the relative 3D distance.</p>\n"
  },
  "emphasis.label.position": {
    "desc": "<p>The location of the label.</p>\n<p><strong>Optional:</strong></p>\n<ul>\n<li>&#39;top&#39;</li>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;bottom&#39;</li>\n</ul>\n"
  },
  "emphasis.label.formatter": {
    "desc": "<p>The formatter of the label content, which supports the string template and the callback function. In either form, <code class=\"codespan\">\\n</code> is supported to represent a new line.</p>\n<p><strong>String template:</strong> </p>\n<p>The model variation includes:</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>: series name.</li>\n<li><code class=\"codespan\">{b}</code>: the name of a data item.</li>\n<li><code class=\"codespan\">{c}</code>: the value of a data item.</li>\n</ul>\n<p><strong>Example:</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {c}&#39;\n</code></pre>\n<p><strong>Callback function:</strong>\n Callback function is in form of:</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>The <code class=\"codespan\">params</code> is the single data set needed by formatter, which is formed as:</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // Series type\n    seriesType: string,\n    // Series index in option.series\n    seriesIndex: number,\n    // Series name\n    seriesName: string,\n    // Data name, or category name\n    name: string,\n    // Data index in input data array\n    dataIndex: number,\n    // Original data as input\n    data: Object,\n    // Value of data. In most series it is the same as data.\n    // But in some series it is some part of the data (e.g., in map, radar)\n    value: number|Array|Object,\n    // encoding info of coordinate system\n    // Key: coord, like (&#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39;)\n    // value: Must be an array, not null/undefined. Contain dimension indices, like:\n    // {\n    //     x: [2] // values on dimension index 2 are mapped to x axis.\n    //     y: [0] // values on dimension index 0 are mapped to y axis.\n    // }\n    encode: Object,\n    // dimension names list\n    dimensionNames: Array&lt;String&gt;,\n    // data dimension index, for example 0 or 1 or 2 ...\n    // Only work in `radar` series.\n    dimensionIndex: number,\n    // Color of data\n    color: string,\n\n}\n</code></pre>\n<p>Note: the usage of encode and dimensionNames can be:</p>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "emphasis.label.textStyle": {
    "desc": "<p>The font style of the label.</p>\n"
  },
  "emphasis.label.textStyle.color": {
    "desc": "<p>The Color of the text.</p>\n"
  },
  "emphasis.label.textStyle.borderWidth": {
    "desc": "<p>The border width of the text.</p>\n"
  },
  "emphasis.label.textStyle.borderColor": {
    "desc": "<p>The border color of the text.</p>\n"
  },
  "emphasis.label.textStyle.fontFamily": {
    "desc": "<p>The font family of the text.</p>\n"
  },
  "emphasis.label.textStyle.fontSize": {
    "desc": "<p>The font size of the text.</p>\n"
  },
  "emphasis.label.textStyle.fontWeight": {
    "desc": "<p>The font thick weight of the text.</p>\n<p><strong>Optional:</strong></p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
  },
  "data": {
    "desc": "<p>The data array of scatter3D. Each item in the array is a piece of data. Usually, this data stores each attribute/dimension of the data in an array. As Follows:</p>\n<pre><code class=\"lang-js\">data: [\n    [[12, 14, 10], [34, 50, 15], [56, 30, 20], [10, 15, 12], [23, 10, 14]]\n]\n</code></pre>\n<p>For each item in the array：</p>\n<ol>\n<li>In <a href=\"#grid3D\">grid3D</a> ,the first three values of each item are<code class=\"codespan\">x</code>, <code class=\"codespan\">y</code>, <code class=\"codespan\">z</code>.</li>\n<li>In <a href=\"#geo3D\">geo3D</a> and <a href=\"globe\" target=\"_blank\">globe</a> ,the first two values of each item  are longitude <code class=\"codespan\">lng</code>, latitude <code class=\"codespan\">lat</code>,</li>\n</ol>\n<p>In addition to the default values for the coordinates, each item can be added with any number of values to <a href=\"#visualMap\">visualMap</a> the component for any other graphical property, such as color, etc.</p>\n<p>More likely, we need to assign name to each data item, in which case each item should be an object:</p>\n<pre><code class=\"lang-js\">[{\n    // name of date item\n    name: &#39;data1&#39;,\n    // value of date item is 8\n    value: [12, 14, 10]\n}, {\n    name: &#39;data2&#39;,\n    value: 20\n}]\n</code></pre>\n<p>Each data item can be further customized:</p>\n<pre><code class=\"lang-js\">[{\n    name: &#39;data1&#39;,\n    value: [12, 14, 10]\n}, {\n    // name of data item\n    name: &#39;data2&#39;,\n    value : [34, 50, 15],\n    // user-defined special itemStyle that only useful for this data item\n    itemStyle:{}\n}]\n</code></pre>\n"
  },
  "blendMode": {
    "desc": "<p>Sets the type of compositing operation to apply when drawing a new shape. </p>\n<p>Currently supporting <code class=\"codespan\">&#39;source-over&#39;</code>, <code class=\"codespan\">&#39;lighter&#39;</code>. The default is <code class=\"codespan\">&#39;source-over&#39;</code> mode is blended by alpha. The <code class=\"codespan\">&#39;lighter&#39;</code> is overlap mode. In this mode, the area where the number of graphics is concentrated can be highlighted by the overlap.</p>\n"
  },
  "zlevel": {
    "desc": "<p>The layer in which the component is located.</p>\n<p><code class=\"codespan\">zlevel</code> is used to make layers with Canvas. Graphical elements with different <code class=\"codespan\">zlevel</code> values will be placed in different Canvases, which is a common optimization technique. We can put those frequently changed elements (like those with animations) to a separate <code class=\"codespan\">zlevel</code>. Notice that too many Canvases will increase memory cost, and should be used carefully on mobile phones to avoid the crash.</p>\n<p>Canvases with bigger <code class=\"codespan\">zlevel</code> will be placed on Canvases with smaller <code class=\"codespan\">zlevel</code>.</p>\n<p><strong>Note:</strong> The layers of the components in echarts-gl need to be separated from the layers of the components in echarts. The same <code class=\"codespan\">zlevel</code> cannot be used for both WebGL and Canvas drawing at the same time.</p>\n"
  },
  "silent": {
    "desc": "<p>Whether the graph doesn`t respond and triggers a mouse event. The default is false, which is to respond to and trigger mouse events.</p>\n"
  },
  "animation": {
    "desc": "<p>Whether to enable animation.</p>\n"
  },
  "animationDurationUpdate": {
    "desc": "<p>The duration time for update the transition animation.</p>\n"
  },
  "animationEasingUpdate": {
    "desc": "<p>The easing effect for update transition animation.</p>\n"
  }
}