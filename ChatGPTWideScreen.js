// ==UserScript==
// @name              ChatGPT 展示大屏
// @description       移除ChatGPT对话框的宽度限制，让对话内容充分利用屏幕宽度
// @version           1.0
// @author            xcanwin
// @namespace         https://github.com/xcanwin/KeepChatGPT/
// @match             *://chat.openai.com/*
// @match             *://chatgpt.com/*
// @grant             GM_addStyle
// @run-at            document-start
// @noframes
// ==/UserScript==

(function() {
    'use strict';

    // 添加CSS样式来移除宽度限制
    GM_addStyle(`
        /* 移除对话容器的最大宽度限制 */
        main .w-full.text-token-text-primary {
            max-width: none !important;
        }

        /* 移除消息容器的宽度限制 */
        [data-testid="conversation-turn"] {
            max-width: none !important;
        }

        [data-testid="conversation-turn"] > div {
            max-width: none !important;
        }

        /* 移除输入框容器的宽度限制 */
        form[class*="w-full"] {
            max-width: 90% !important;
            margin: 0 auto !important;
        }

        /* 移除主要内容区域的宽度限制 */
        main .flex.h-full > div {
            max-width: none !important;
        }

        /* 移除线程内容的最大宽度限制 */
        #thread-bottom > div > div {
            --thread-content-max-width: none !important;
        }

        /* 移除文章内容的宽度限制 */
        article.text-token-text-primary > div > div.w-full {
            max-width: none !important;
        }

        /* 确保消息内容能够充分利用宽度 */
        .text-token-text-primary .group {
            max-width: none !important;
        }

        /* 针对较大屏幕的特殊处理 */
        @media (min-width: 768px) {
            /* 主要对话区域 */
            main .mx-auto {
                max-width: 95% !important;
                margin-left: auto !important;
                margin-right: auto !important;
            }

            /* 确保对话内容不会过度居中 */
            .text-token-text-primary > div {
                max-width: none !important;
            }
        }

        @media (min-width: 1024px) {
            /* 桌面端进一步优化 */
            form[class*="w-full"] {
                max-width: 85% !important;
            }

            /* 确保大屏幕下的良好显示效果 */
            main .w-full.text-token-text-primary {
                padding-left: 2rem !important;
                padding-right: 2rem !important;
            }
        }

        /* 移除可能存在的固定宽度约束 */
        .max-w-3xl,
        .max-w-4xl,
        .max-w-5xl {
            max-width: none !important;
        }

        /* 确保代码块也能充分利用宽度 */
        pre {
            max-width: none !important;
            width: 100% !important;
        }

        /* 优化表格显示 */
        table {
            width: 100% !important;
            max-width: none !important;
        }
    `);

    console.log('ChatGPT 展示大屏功能已激活');

})();
