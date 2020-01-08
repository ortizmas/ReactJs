<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ route('login') }}">Login</a>

                        @if (Route::has('register'))
                            <a href="{{ route('register') }}">Register</a>
                        @endif
                    @endauth
                </div>
            @endif

            <div class="content">
                <div class="title m-b-md">
                    Laravel
                    <div id="example"></div>
                </div>

                <div class="links">
                    <a href="https://laravel.com/docs">Docs</a>
                    <a href="https://laracasts.com">Laracasts</a>
                    <a href="https://laravel-news.com">News</a>
                    <a href="https://blog.laravel.com">Blog</a>
                    <a href="https://nova.laravel.com">Nova</a>
                    <a href="https://forge.laravel.com">Forge</a>
                    <a href="https://vapor.laravel.com">Vapor</a>
                    <a href="https://github.com/laravel/laravel">GitHub</a>
                </div>
            </div>
        </div>

        <table class="table table-hover table-striped">
            <thead>
                <tr>
                    <th>header</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>data</td>
                </tr>
            </tbody>
        </table>

        <div class="container">
            <div class="row pb-3">
                <div class="col-md-10">
                    <p>EDITAL DO PROCESSOS SELETIVO PARA BOLSA FILANTR&Oacute;PICA EDUCACIONAL DO ENSINO B&Aacute;SICO 2020 - ALUNOS VETERANOS</p>
                </div>
                <div class="col-md-2"><a class="btn btn-outline-info btn-sm" href="../../../source2019/EDITAL_1.pdf">Ver edital</a></div>
            </div>
            <div class="row">
                <div class="col-md-10">&nbsp;</div>
                <div class="col-md-10">EDITAL DE PRORROGA&Ccedil;&Atilde;O DE INSCRI&Ccedil;&Atilde;O PARA BOLSA EDUCACIONAL DO ENSINO B&Aacute;SICO - ALUNOS VETERANOS 2020</div>
                <div class="col-md-2"><a class="btn btn-outline-info btn-sm" href="../../../source2019/EDITAL-DE-PRORROGACAO-DE-INSCRICAO-VETERANOS-2020.pdf">Ver edital</a></div>
            </div>
        </div>
        <div class="container">&nbsp;</div>
        <div class="container">EDITAL DE PRORROGA&Ccedil;&Atilde;O DE INSCRI&Ccedil;&Atilde;O PARA BOLSA EDUCACIONAL DO ENSINO B&Aacute;SICO - ALUNOS VETERANOS 2020</div>
        <div class="container"><a href="../../../source2019/EDITAL-DE-PRORROGACAO-DE-INSCRICAO--SELECAO-VETERANOS-2020-N2.pdf"><span style="text-decoration: underline;">Ver edital</span></a></div>
        <div class="container">&nbsp;</div>
        <div class="container">EDITAL DE RESULTADO CONCISTENTE NA 2&ordf; ETAPA&nbsp; &nbsp;<a href="../../../source2019/Doc0137.pdf"><span style="text-decoration: underline;"> Ver edital</span></a></div>
        <div class="container">
            <div class="row">
                <div class="col-md-10">EDITAL DE PRORROGA&Ccedil;&Atilde;O DA DATA DE RESULTADO DA SELE&Ccedil;&Atilde;O (3&ordf; LISTA) ALUNOS VETERANOS 2020</div>
                <div class="col-md-2"><a class="btn btn-outline-info btn-sm" href="https://drive.google.com/open?id=1o1lmN7Hv20v4V6EneDrLSn8x1lDRZpTd" target="_blank" rel="noopener"> Ver edital</a></div>
            </div>
        </div>
        <div class="container"><br /><strong>LISTAS DE RESULTADOS SELE&Ccedil;&Atilde;O DE ALUNOS BOLSISTAS VETERANOS 2020 EDUCA&Ccedil;&Atilde;O B&Aacute;SICA</strong></div>
        <div class="container"><br />
            <div class="row pb-3">
                <div class="col-md-10">
                    <p>1&ordf; Lista - 50%</p>
                    <p><a lass="btn btn-outline-info btn-sm" href="../../../source2019/1-LISTA-RENOVACAO-50.pdf">Ver lista</a></p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-10">1&ordf; Lista - 100%</div>
                <div class="col-md-10">&nbsp;</div>
                <div class="col-md-10"><a lass="btn btn-outline-info btn-sm" href="../../../source2019/1-LISTA-RENOVACAO-100.pdf">Ver lista</a></div>
                <div class="col-md-10">&nbsp;</div>
                <div class="col-md-10">&nbsp;</div>
                <div class="col-md-10"><strong>LISTA DE DIVULGA&Ccedil;&Atilde;O DE RESULTADOS SELE&Ccedil;&Atilde;O DE ALUNOS BOLSISTAS VETERANOS 2020 EDUCA&Ccedil;&Atilde;O B&Aacute;SICA&nbsp;</strong></div>
                <div class="col-md-10">&nbsp;</div>
                <div class="col-md-10">&nbsp;</div>
                <div class="col-md-10"><span style="text-decoration: underline;"><a href="../../../source2019/RENOVACAO-50-E-100.pdf">EDITAL DE DIVULGA&Ccedil;&Atilde;O DE RESULTADO COM PRAZO PARA MATR&Iacute;CULA 2&ordf; ETAPA - 100% e 50%</a></span></div>
                <div class="col-md-10">&nbsp;</div>
                <div class="col-md-10">&nbsp;</div>
            </div>
        </div>


    </body>
</html>
