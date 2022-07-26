<template>
    <div class="widget_summary d-lg-none d-block mt-3">
        <ul class="mb-0 pb-0">
            <li class="widget_summary_li">
                <router-link :to="{name: 'userfavorites'}" class="widget_summary_li_link">
                    <svg data-name="IconLike" class="widget_summary_li_link_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path stroke-width="1.6" d="M8 13.967c5.99-4.902 7.2-6.39 7.2-8.737 0-1.89-1.53-3.424-3.42-3.43-1.33 0-2.165.522-3.18 1.67l-.6.677-.6-.677C6.386 2.322 5.55 1.8 4.22 1.8 2.33 1.805.8 3.34.8 5.23c0 2.347 1.21 3.835 7.2 8.737z"></path></svg>
                        Избранное
                        <span data-name="Badge" class="widget_summary_li_link_svg-2">2</span>
                </router-link>
            </li>
            <li class="widget_summary_li">
                <router-link :to="{name: 'objects'}" class="widget_summary_li_link">
                    <svg data-name="IconHidden" xmlns="http://www.w3.org/2000/svg" class="widget_summary_li_link_svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                    Мои объявления
                </router-link>
            </li>
            <li class="widget_summary_li">
                <a href="#!" class="widget_summary_li_link">
                    <svg data-name="IconHidden" class="widget_summary_li_link_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16.001" width="18" height="18"><path fill="currentColor" stroke="none" d="M14.574 5.669L13.15 7.093c.278.347.506.664.669.907-.76 1.13-2.85 3.82-5.561 3.985L6.443 13.8c.496.124 1.014.2 1.557.2 4.707 0 7.744-5.284 7.871-5.508a1 1 0 0 0 .001-.98c-.047-.085-.5-.881-1.298-1.843zM.293 15.707a.998.998 0 0 0 1.41.004l.004-.004 14-14A1 1 0 0 0 14.293.293l-2.745 2.745C10.515 2.431 9.331 2 8 2 3.245 2 .251 7.289.126 7.514a.998.998 0 0 0 .002.975c.07.125 1.044 1.802 2.693 3.276L.292 14.294a1 1 0 0 0 .001 1.413zm1.888-7.708C2.958 6.835 5.146 4 8 4c.742 0 1.437.201 2.078.508L8.512 6.074A1.886 1.886 0 0 0 8 6a2 2 0 0 0-2 2c0 .178.029.348.074.512L4.24 10.346a12.645 12.645 0 0 1-2.059-2.347z"></path></svg>
                    Скрытые объявления
                </a>
            </li>
            <li class="widget_summary_li">
                <a href="#!" class="widget_summary_li_link">
                    <svg data-name="IconMessage" class="widget_summary_li_link_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.7 16.7"><g fill="currentColor" stroke="none"><path d="M16.65 7.458C16.196 3.236 12.644.03 8.386 0c-1.62.002-3.192.47-4.55 1.35C1.57 2.804.29 4.927.036 7.657-.116 9.302.232 10.93 1.05 12.39c-.045.347-.096.696-.147 1.043l-.377 2.702.615-.046c1.05-.15 2.1-.29 3.1-.43l.125.02c1.215.66 2.587 1.01 3.97 1.01.62-.003 1.24-.07 1.84-.204 4.15-.926 6.938-4.81 6.486-9.04zM2.468 14.23l.083-.57c.05-.346.1-.702.15-1.08.03-.314-.02-.628-.16-.91l-.04-.098c-.64-1.148-.92-2.448-.8-3.76.205-2.198 1.23-3.903 3.05-5.068C5.84 2.04 7.1 1.664 8.396 1.66H8.4c2.822 0 5.35 1.79 6.284 4.457.66 1.8.5 3.795-.436 5.47-.933 1.68-2.544 2.88-4.42 3.292-.492.1-.996.16-1.492.16-1.11-.01-2.21-.29-3.19-.83-.265-.14-.56-.217-.86-.217-.074 0-.147.005-.222.014l-1.588.214z"></path><circle cx="5.149" cy="8.35" r="1"></circle><circle cx="8.349" cy="8.35" r="1"></circle><circle cx="11.549" cy="8.35" r="1"></circle></g></svg>
                    Сообщения
                </a>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.widget_summary{
    position: relative;
    margin-bottom: 10px;
    box-shadow: 0 1px 0 0 #e4e4e4;
    border: 1px solid #e4e4e4;
    border-radius: 3px;
    background-color: #fff;
}
.widget_summary_li{
    position: relative;
    border-bottom: 1px solid #e4e4e4;
    color: #121212;
    font-weight: 700;
    font-size: 16px;
}
.widget_summary_li:last-child{
    border-bottom: none;
}
.widget_summary_li_link{
    display: flex;
    align-items: center;
    padding: 20px 20px 20px 50px;
    color: #121212;
    text-decoration: none;
}
.widget_summary_li_link_svg{
    fill: none;
    stroke: #121212;
    display: flex;
    position: absolute;
    left: 16px;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
}

.widget_summary_li_link_svg-2{
    margin-left: 8px;
    border-radius: 100px;
    background-color: hsla(0,0%,7%,.1);
    padding: 3px 10px 4px;
    color: rgba(0,0,0,.87);
    font-weight: 700;
    font-size: 14px;
    line-height: 1.2;
}
</style>